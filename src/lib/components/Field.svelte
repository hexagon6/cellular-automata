<script>
  import {
    x,
    y,
    field,
    fieldtype,
    statecolors,
  } from '../modules/stores/index.js'
  import { listToDict, dictToList } from '../modules/index.js'
  import LabeledList from './LabeledList.svelte'

  import SVGField4 from './SVGField4.svelte'
  import SVGField6 from './SVGField6.svelte'

  function cell({ x, y, s, ...rest }) {
    console.log('cell has been called', x, y, s, rest)
    const f = listToDict($field)
    const c = `${x}x${y}`
    f[c] = (f[c] + 1) % s
    field.set(dictToList(f))
  }
</script>

<div class="field-container">
  {#if $fieldtype === 'hexagonal'}
    <SVGField6 cx="86.66" cy="100" on:cell={({ detail }) => cell(detail)} />
  {/if}
  {#if $fieldtype === 'rectangular'}
    <SVGField4 cx="50" cy="50" on:cell={({ detail }) => cell(detail)} />
  {/if}
</div>

<span class="overview">
  <LabeledList
    elements={{
      $x,
      $y,
      cells: $x * $y,
    }}
  />
  <div>
    {#if $statecolors}
      <ul>
        {#each $statecolors as _s}
          <li>
            <span style={`color: ${_s};`}>[{_s}]</span>
          </li>
        {/each}
      </ul>
    {/if}
  </div>
</span>

<style>
  span.overview {
    width: 10vw;
    color: violet;
    font-weight: 700;
    font-size: 0.5em;
  }

  ul {
    font-weight: 300;
    font-style: italic;
    list-style: none;
  }

  li {
    display: block;
    float: left;
  }

  .field-container {
    padding: 0;
    width: 100%;
    height: 98%;
    overflow: hidden;
    box-sizing: content-box;
  }
</style>
