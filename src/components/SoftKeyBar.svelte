<script>
  import MenuIcon from '../lib/icons/menu.svg?raw';
  import BackIcon from '../lib/icons/back.svg?raw';
  import SelectIcon from '../lib/icons/select.svg?raw';

  const { items = [], onSoftKeyClick = () => { } } = $props();

  function getIconFromName(name) {
    switch (name) {
      case 'menu':
        return MenuIcon;
      case 'back':
        return BackIcon;
      case 'select':
        return SelectIcon;
    }

    // Warn the missing icon name
    console.warn(`SoftKeyBar - Missing Icon: "${name}"`);

    return '';
  }

  function handleEvent(e, position) {
    switch (event.key) {
      /* Left Soft Key (LSK) */
      case 'Escape':
        return onSoftKeyClick('start');
      case 'Enter':
        return onSoftKeyClick('center');
      /* Widgets cannot intercept RSK */
    }

    if (position) {
      onSoftKeyClick(position);
    }
  }
</script>

<svelte:window
  onkeydown={handleEvent} />

{#snippet softKeyButton(button)}
<button
  disabled={!button}
  aria-disabled={!button}
  onclick={(e) => handleEvent(e, button.key)}
  title={(button) ? button.title : undefined}>
  {#if button && button.component}
    <button.component></button.component>
  {:else if button}
    {#if button.icon}
      {@html getIconFromName(button.icon)}
    {/if}
    {#if button.text}
      {button.text}
    {/if}
    {#if button.html}
      {@html button.html}
    {/if}
  {/if}
</button>
{/snippet}

<footer>
  {@render softKeyButton(items.find(({ key }) => (key === 'start')))}
  {@render softKeyButton(items.find(({ key }) => (key === 'center')))}
  {@render softKeyButton(items.find(({ key }) => (key === 'end')))}
</footer>

<style>
  footer {
    width: 100vw;
    display: flex;
    white-space: nowrap;
    background: black;
    color: white;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
  }

  footer > button {
    flex: 0 1 33.3%;
    display: inline-block;
    vertical-align: middle;
    appearance: none;
    background: transparent;
    border: none;
    color: white;
  }

  /* QVGA */
  @media only screen and (min-width: 129px) and (max-width: 240px) {
    footer {
      height: 36px;
    }

    :global(footer > button svg) {
      transform: scale(1.5);
    }

    footer > button {
      padding: 0 8pt;
    }
  }

  /* QQVGA */
  @media only screen and (max-width: 128px) {
    footer {
      height: 20px;
    }

    footer > button {
      padding: 0 4pt;
    }
  }

  footer > button[disabled] {
    pointer-events: none;
  }

  footer > button:nth-child(1) {
    align-content: start;
    text-align: start;
  }

  footer > button:nth-child(2) {
    align-content: center;
    text-align: center;
    text-transform: uppercase;
    flex-grow: 1;
    flex-shrink: 0;
  }

  footer > button:nth-child(3) {
    align-content: end;
    text-align: end;
  }
</style>