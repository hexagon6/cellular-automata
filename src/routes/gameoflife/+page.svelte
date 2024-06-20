<script>
  import { GameofLifeDefault as defaults } from '../../lib/modules/index.js'
  import Game from '../../lib/components/Game.svelte'
</script>

<svelte:head>
  <title>Game of Life</title>
</svelte:head>

<Game {defaults} />
