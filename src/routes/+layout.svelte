<script>
  import Nav from '$lib/components/Nav.svelte'
</script>

<Nav />

<main>
  <slot />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    padding: 0;
    margin: 0 auto;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }
</style>
