<script>
  export let elements = []
  $: els = Object.entries(elements)
</script>

<ul>
  {#each els as [key, value]}
    <li>{key}: {value}</li>
  {/each}
</ul>

<style>
  ul {
    list-style: none;
  }

  li {
    float: left;
    padding-right: 2em;
  }
</style>
