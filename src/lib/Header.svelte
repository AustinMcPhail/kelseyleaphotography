<script>
  import SocialIcon from './SocialIcon.svelte'
  import {page} from '$app/stores'

  let menuOpen = false
  export let facebookUrl = ''
  export let instagramUrl = ''

  page.subscribe(() => {
    menuOpen = false
  })
</script>

<header>
  <nav>
    <div class="nav">
      <a href="/gallery">Gallery</a>
      <h1>
        <a href="/" id="logo">
          <img src="/header-logo.png" alt="Kelsey Lea Photography" />
        </a>
      </h1>
      <a href="/packages">Packages</a>
    </div>
    <div class="socials">
      <a href={facebookUrl} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
        <SocialIcon type="fb" --light="var(--dark)" />
      </a>
      <a href={instagramUrl} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
        <SocialIcon type="ig" --light="var(--dark)" />
      </a>
    </div>
  </nav>
</header>

<style>
  nav {
    padding-block: var(--space-1);
  }

  div.nav {
    background-color: var(--light);
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    justify-items: center;
    align-items: center;
    gap: var(--space-2);
  }
  div.nav h1 img {
    width: clamp(100px, 20vw, 200px);
  }
  div.nav a {
    margin-top: var(--space-2);
    font-size: var(--font-big);
    text-decoration: none;
  }

  div.socials {
    display: flex;
    justify-content: center;
    gap: var(--space-2);
  }
  div.socials a {
    color: black;
  }
</style>
