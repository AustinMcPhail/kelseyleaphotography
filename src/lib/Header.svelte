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
      <div class="gallery">
        <a href="/gallery">Gallery</a>
        <div class="flower-container">
          <img
            class="flower"
            class:active={$page.url.pathname === '/gallery'}
            src="/flower.svg"
            alt=""
          />
        </div>
      </div>
      <h1>
        <a href="/" id="logo">
          <img src="/header-logo.png" alt="Kelsey Lea Photography" />
        </a>
      </h1>
      <div class="packages">
        <a href="/packages" class="packages">Packages</a>
        <div class="flower-container">
          <img
            class="flower"
            class:active={$page.url.pathname === '/packages'}
            src="/flower.svg"
            alt=""
          />
        </div>
      </div>
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
  .gallery,
  .packages {
    display: flex;
  }
  .gallery .flower-container,
  .packages .flower-container {
    pointer-events: none;
    width: 100%;
    text-align: center;
    position: relative;
  }
  .gallery .flower-container .flower,
  .packages .flower-container .flower {
    width: 75px;
    height: auto;
    position: absolute;
    transition: opacity 0.2s ease-in-out;
    opacity: 0;
  }

  .gallery .flower-container .flower {
    right: -10px;
    top: 50%;
  }
  .packages .flower-container .flower {
    right: 10px;
    top: 50%;
    transform: scaleX(-1);
  }

  .gallery a:hover + .flower-container .flower,
  .gallery a:focus + .flower-container .flower,
  .packages a:hover + .flower-container .flower,
  .packages a:focus + .flower-container .flower {
    opacity: 0.25;
  }

  .gallery .flower-container .flower.active,
  .packages .flower-container .flower.active {
    opacity: 1;
  }

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
