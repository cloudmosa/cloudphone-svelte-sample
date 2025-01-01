<script>
  import { t } from '$lib/translations';
  import Header from '../components/Header.svelte';
  import OptionsMenu from '../components/OptionsMenu.svelte';
  import SoftKeyBar from '../components/SoftKeyBar.svelte';

  let menuVisible = $state(false);

  function onSoftKeyClick(position) {
    switch (position) {
      case 'start':
        menuVisible = !menuVisible;
        break;
      // This is the default behavior of Cloud Phone
      // It cannot be overriden by widgets
      case 'end':
        history.back();
        break;
    }
  }

  function onKeyDown(e) {
    if (e.key === 'Backspace') {
      e.preventDefault();
      menuVisible = false;
    }
  }
</script>

<Header title={$t('common.cloudphone')} />

<svelte:window onkeydown={onKeyDown} />

<section id="app">
  <h1>{$t('common.sveltedemo')}</h1>
  <p>{@html $t('home.description')}</p>
</section>

<OptionsMenu
  visible={menuVisible}
  items={[{
    href: '/about',
    text: $t('common.about'),
  }, {
    href: '/settings',
    text: $t('common.settings'),
  }, {
    href: 'https://www.cloudfone.com/dev-privacy',
    target: '_self',
    text: $t('common.privacy')
  }]} />

<SoftKeyBar
  onSoftKeyClick={onSoftKeyClick}
  items={[{
    key: 'start',
    icon: 'menu',
  }, {
    key: 'center',
    icon: 'select',
    title: $t('common.select'),
  }, {
    key: 'end',
    icon: 'back',
  }]} />

<style>
  h1, p {
    margin: 0;
  }

  h1 {
    font-size: 0.9em;
  }

  p {
    margin-block-start: 0.3em;
    font-size: 0.8em;
  }

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

    h1 {
      font-size: 1.2em;
    }

    p {
      font-size: 1em;
    }
  }

  /* QQVGA */
  @media only screen and (max-width: 128px) {
    #app {
      padding: 20px 4pt;
      margin: 4pt 0;
    }
  }
</style>
