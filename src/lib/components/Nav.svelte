<script>
  import { page as p } from '$app/stores'
  console.log($p.url.pathname)

  const page = $p.url.pathname
</script>

<nav>
  <ul>
    <li><a class={page === '' && 'selected'} href=".">home</a></li>
    <li><a class={page === '/about' && 'selected'} href="about">about</a></li>
    <li>
      <a
        rel="prefetch"
        class={page === '/gameoflife' && 'selected'}
        href="gameoflife">Game of Life</a
      >
    </li>
    <li>
      <a rel="prefetch" class={page === '/waves' && 'selected'} href="waves"
        >Waves</a
      >
    </li>
  </ul>
</nav>

<style>
  nav {
    border-bottom: 1px solid rgba(170, 30, 30, 0.1);
    font-weight: 300;
    padding: 0 1em;
    display: flex;
    justify-content: center;
  }

  ul {
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: '';
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  .selected {
    color: hsl(184, 100%, 98%);
    border-style: solid;
    border-color: hsl(184, 90%, 50%);
    background-color: hsla(226, 40%, 50%, 0.2);
  }

  a {
    color: hsl(184, 100%, 20%);
    background-color: hsl(184, 100%, 75%);
    text-decoration: none;
    padding: 1em 0.5em;
    margin: 0 2px;
    display: block;
    outline: 0;
    border-style: solid;
    border-width: 0.1em;
    border-radius: 8em;
    border-color: hsla(184, 95%, 50%, 0.1);

    transition: 2s ease;
  }

  a:hover,
  a:active,
  a:focus {
    color: hsl(184, 100%, 75%);
    background-color: hsl(184, 100%, 20%);
    border-style: solid;
    border-color: hsl(184, 95%, 50%);
    border-width: 0.1em;
    border-radius: 0.8em;

    transition: 0.3s ease;
  }
</style>
