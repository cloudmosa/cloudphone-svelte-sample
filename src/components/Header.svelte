<script>
  import icon from '../icon.png?url&inline';
  const { title } = $props();
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<header>
  <img src={icon} alt="Cloud Phone logo" draggable="false" width="1em" height="1em" />
  <h1>{title}</h1>
</header>

<style>
  header {
    text-align: center;
    font-weight: bold;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    white-space: nowrap;
    overflow: hidden;
    user-select: none;
    z-index: 2;
    background: black;
  }

  header img {
    margin-inline-end: 0.5em;
    width: 1em;
    height: 1em;
  }

  header img, header h1 {
    display: inline-block;
    vertical-align: middle;
  }

  header h1 {
    margin: 0;
    font-size: 24pt;
  }

  /* QVGA */
  @media only screen and (min-width: 129px) and (max-width: 240px) {
    header img {
      height: 24pt;
      width: 24pt;
    }

    header {
      height: 36px;
    }

    header h1 {
      font-size: 20pt;
      line-height: 36px;
    }
  }

  /* QQVGA */
  @media only screen and (max-width: 128px) {
    header img {
      height: 12pt;
      width: 12pt;
      margin-inline-end: 0.25em;
    }

    header {
      height: 20px;
    }

    header h1 {
      font-size: 11pt;
      line-height: 20px;
    }
  }
</style>
