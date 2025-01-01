<script>
  import { getLanguageName, t } from '$lib/translations';
  import { locale, locales, setLocale } from '$lib/translations/index';
	import { autofocus } from '$lib/utils';
  import Header from '../../components/Header.svelte';
  import OptionsMenu from '../../components/OptionsMenu.svelte';
  import SoftKeyBar from '../../components/SoftKeyBar.svelte';

  let menuVisible = $state(false);

  console.log($locales);

  function onSoftKeyClick(position) {
    if (position === 'end') {
      history.back();
    }
  }

  function showLanguageSelector(e) {
    if (e.key) {
      if (e.key === 'Backspace') {
        e.preventDefault();
        menuVisible = false;
      }

      if (e.key !== 'Enter') return;
    }
    e.preventDefault();
    menuVisible = !menuVisible;
  }

  function onMenuItemSelected(item) {
    // Save preference in localStorage
    localStorage.setItem('lang', item.code);
    setLocale(item.code);

    menuVisible = false;
  }
</script>

<Header title={$t('common.settings')} />

<svelte:window onkeydown={showLanguageSelector} />

<section id="app">
  <div>
    <!-- svelte-ignore a11y_autofocus -->
    <button
      use:autofocus
      autofocus
      class="focused"
      role="menuitem"
      onclick={showLanguageSelector}>
      <span class="title">{$t('common.language')}</span>
      <span class="description">{getLanguageName($locale || 'en', $locale || 'en')}</span>
    </button>
  </div>
</section>

<OptionsMenu
  visible={menuVisible}
  onMenuItemSelected={onMenuItemSelected}
  items={$locales.map((code) => ({
    href: `#${code}`,
    code: code,
    text: getLanguageName($locale || 'en', code),
  }))} />

<SoftKeyBar
  onSoftKeyClick={onSoftKeyClick}
  items={[{
    key: 'end',
    icon: 'back',
  }]} />

<style>
  #app {
    width: 100%;
    max-height: 100%;
    overflow-y: auto;
  }

  /* QVGA */
  @media only screen and (min-width: 129px) and (max-width: 240px) {
    #app {
      padding: 36px 8pt;
      margin: 8pt 0;
    }
  }

  /* QQVGA */
  @media only screen and (max-width: 128px) {
    #app {
      padding: 20px 4pt;
      margin: 4pt 0;
    }
  }

  button[role='menuitem'] {
    background: transparent;
    border: none;
    color: white;
    margin: 0;
    padding: 4pt 0;
    display: block;
    width: 100%;
    text-align: start;
  }

  button[role='menuitem'] .title,
  button[role='menuitem'] .description {
    width: 100%;
    display: block;
  }

  button[role='menuitem'] .title {
    font-size: 12pt;
    font-weight: bold;
  }

  button[role='menuitem'] .description {
    font-size: 10pt;
  }

  button[role='menuitem'].focused,
  button[role='menuitem']:focus {
    background-color: #1971e6;
    outline: none;
    border-image: conic-gradient(#1971e6 0 0) fill 0//0 100vw;
  }
</style>
