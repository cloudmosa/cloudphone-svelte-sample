<script>
  import { autoFocusFirstFocusable } from "$lib/utils";

  const { items = [], visible = false, onMenuItemSelected = () => { } } = $props();
  let focusedIndex = $state(0);
  let menu;

  function handleKeyDown(e) {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        focusedIndex = (focusedIndex + 1) % items.length;
        break;
      case 'ArrowUp':
        e.preventDefault();
        focusedIndex = (focusedIndex - 1 + items.length) % items.length;
        break;
      case 'Enter':
        // Only handle clicks for non-routed links
        const href = e.target.getAttribute('href');
        if ((href || '').startsWith('#')) {
          e.preventDefault();
          onMenuItemSelected(items[focusedIndex]);
        } else {
          e.target.click();
        }
        break;
    }


    menu?.children[focusedIndex]?.focus();
  }
</script>

<svelte:window onkeydown={handleKeyDown} />

<menu
  bind:this={menu}
  use:autoFocusFirstFocusable
  hidden={!visible}
  aria-hidden={!visible}>
  {#each items as item, index}
    <a {...item} class:focused={index === focusedIndex} >
      {item.text}
    </a>
  {/each}
</menu>

<style>
  menu {
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    background: black;
    padding: 0;
    margin: 0;
  }

  menu[hidden] {
    display: none;
  }

  menu > * {
    margin: 0;
    padding: 0.35em 4pt;
    font-size: 1em;
    color: white;
    background: transparent;
    border: none;
    appearance: none;
    text-align: start;
    display: block;
    width: 100%;
    white-space: nowrap;
  }

  menu > a {
    text-decoration: none;
    outline: none;
  }

  menu > *.focused,
  menu > *:focus,
  menu > *:active {
    background-color: #1971e6;
  }

  /* QVGA */
  @media only screen and (min-width: 129px) and (max-width: 240px) {
    menu > * {
      padding: 0.35em 8pt;
      font-size: 1.4em;
    }

    menu {
      height: calc(100vh - 36px);
    }
  }

  /* QQVGA */
  @media only screen and (max-width: 128px) {
    menu {
      height: calc(100vh - 20px);
    }
  }
</style>