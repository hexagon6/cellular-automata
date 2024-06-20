<script>
  import { createEventDispatcher } from 'svelte'
  import { x, y, field, size, statecolors } from '../modules/stores/index.js'

  const dispatch = createEventDispatcher()

  const cellstate = (colors, n) => (n < colors.length ? colors[n] : colors[0])
  $: _x = $size * $x * 100
  $: _y = $size * $y * 100

  export let cx
  export let cy
</script>

<svg width="100%" height="100%" viewBox="0 0 {_x} {_y}">
  <defs>
    <rect
      id="rectangle"
      width={cx * $size}
      height={cy * $size}
      stroke-opacity="0.2"
      stroke="#efefef"
    />
  </defs>
  <g>
    {#each $field as f, i}
      <g transform="matrix(2,0,0,2,{f.x},{f.y})">
        <!-- svelte-ignore missing-declaration -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <use
          x={f.x * cx * $size}
          y={f.y * cy * $size}
          href="#rectangle"
          fill={cellstate($statecolors, f.v)}
          on:click={() =>
            dispatch('cell', { x: f.x, y: f.y, s: $statecolors.length })}
        />
      </g>
    {/each}
  </g>
</svg>

<style>
  svg {
    width: 100%;
    height: 100%;
    border: 1px solid white;
  }
</style>
