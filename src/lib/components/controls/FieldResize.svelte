<script>
  import { onMount } from 'svelte'
  import { x, y, size } from '../../modules/stores/index.js'
  import { mapIterator } from '../../modules/index.js'

  const fieldsizes = mapIterator(
    [
      {
        x: 8,
        y: 8,
        size: 0.5,
      },
      {
        x: 16,
        y: 16,
        size: 0.25,
      },
    ],
    0
  )

  function toggleFieldResize() {
    const { x: _x, y: _y, size: _size } = fieldsizes.next()
    x.set(_x)
    y.set(_y)
    size.set(_size)
  }

  onMount(() => {
    toggleFieldResize()
  })
</script>

<input on:click={toggleFieldResize} type="button" value={`[${$x}x${$y}]`} />
