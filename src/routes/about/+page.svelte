<script>
  import { t } from '$lib/translations';
	import { autofocus } from '$lib/utils';
  import Header from '../../components/Header.svelte';
  import SoftKeyBar from '../../components/SoftKeyBar.svelte';

  function onSoftKeyClick(position) {
    if (position === 'end') {
      history.back();
    }
  }
</script>

<Header title={$t('common.about')} />

<section id="app" use:autofocus>
  <h2>{$t('common.about')}</h2>
  <p>{$t('about.description')}</p>
</section>

<SoftKeyBar
  onSoftKeyClick={onSoftKeyClick}
  items={[{
    key: 'end',
    icon: 'back',
  }]} />

<style>
  h2, p {
    margin: 0;
  }

  h2 {
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

    h2 {
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
