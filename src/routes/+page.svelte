<svelte:head>
  <title>cellular automata</title>
</svelte:head>

<h1>CELLULAR AUTOMATA!</h1>

<figure>
  <img alt="Glider" src="glider.png" />
  <figcaption>
    Welcome to cellular automata, built with <a
      href="//sapper.svelte.technology">sapper</a
    >
  </figcaption>
</figure>

<style>
  h1,
  figure {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  figure {
    margin: 0 0 1em 0;
  }

  img {
    width: 100%;
    max-width: 400px;
    margin: 0 0 1em 0;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>
