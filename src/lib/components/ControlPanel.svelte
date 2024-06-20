<script>
  import { stopped } from '../modules/utils/timer.js'
  import { createEventDispatcher, onMount } from 'svelte'
  import FieldType from './controls/FieldType.svelte'
  import FieldResize from './controls/FieldResize.svelte'
  import Interval from './controls/Interval.svelte'

  const dispatch = createEventDispatcher()

  const autostart = () => dispatch('init', { detail: 'init' })

  onMount(() => {
    const timeout = setTimeout(autostart, 200, this)
    return () => clearTimeout(timeout)
  })
</script>

<div class="wrapper">
  <div class="control-panel">
    <div class="section">
      <FieldResize />
    </div>
    <div class="section">
      <input
        on:click={() => dispatch('init', { detail: 'init' })}
        type="button"
        value="init"
      />
    </div>
    <div class="section">
      <FieldType />
    </div>
    <div class="section">
      <input
        on:click={() => dispatch('next', { detail: 'next' })}
        type="button"
        value="next"
      />
    </div>
    <div class="section">
      <button on:click={() => ($stopped = !$stopped)}>
        {#if $stopped}
          <div>
            <span>⌛</span>
          </div>
        {:else}
          <div style="transform:rotate(180deg);">
            <span>⌛</span>
          </div>
        {/if}
      </button>
    </div>
    <div class="section">
      <Interval on:next={() => dispatch('next', { detail: 'next' })} />
    </div>
    <!--
    TODO: make a color profile / state selection component
    FIXME: switcher with many different states, not only 2
  -->
    <!--
  <div class="section">
    <input on:click='$set({ statecolors: $statecolors.length === 3
      ? $stati[0]
      : $stati[1]
    })' type="button" value="{`${$statecolors ? $statecolors.length: 0} states`}" />
  </div>
  -->
  </div>
  <slot></slot>
</div>

<!--  green  #60f370; -->
<!--  orange #efaf03; -->
<!--  blue #18c8ff; -->
<style>
  div :global(button),
  div :global(input) {
    background-color: lightblue;
    border-radius: 6px;
    border-color: darkcyan;
    width: 7em;
    height: 100%;
    font-size: 2rem;
    margin: 2px 1px;
    padding: 4px 16px;
    color: white;
    text-shadow: 0px 0px 4px #efaf03;
    border-radius: 10px;
  }

  /* style alternative state  */

  button:d {
    background-color: darkviolet;
  }

  .control-panel {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-content: center;

    padding: 4px;
    margin: 2px;
  }

  .wrapper {
    display: flex;
    align-content: flex-start;
    width: 100%;
    height: 100%;
  }

  .section {
    height: 100%;
  }

  @media (max-width: 600px) {
    .control-panel {
      flex: auto;
      flex-direction: row;
    }

    .wrapper {
      display: block !important;
    }

    div :global(button),
    div :global(input[type='button']) {
      font-size: 0.8em;
      padding: 0 1em;
      height: 5em;
      width: 100%;
    }
  }
</style>
