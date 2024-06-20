<script>
  import { createEventDispatcher } from 'svelte'
  import { x, y, field, size, statecolors } from '../modules/stores/index.js'
  import { hexagonal } from '../modules/index.js'

  const dispatch = createEventDispatcher()

  const { scale } = hexagonal

  // circle: { offset: 50 }
  const cellstate = (colors, n) => (n < colors.length ? colors[n] : colors[0])
  $: hexagon = scale($size)
  $: _x = 100 * $size * $x
  $: _y = 100 * $size * $y

  export let hexagon = scale()
</script>

<svg width="100%" height="100%" viewBox="0 8 {_x} {_y}">
  <defs>
    <polygon
      id="hexagon"
      points={hexagon}
      opacity="1"
      stroke-opacity="0.2"
      stroke="#efefef"
    />
  </defs>
  <g transform="matrix(1.35,0,0,1.195,0,0)">
    {#each $field as f, i}
      <g transform="matrix(1,0,0,1,{f.x * 75 * $size},{f.y * 86.66 * $size})">
        <!-- svelte-ignore missing-declaration -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <use
          href="#hexagon"
          fill={cellstate($statecolors, f.v)}
          x={0}
          y={f.x % 2 === 1 ? 6.66 * $size : 50 * $size}
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
