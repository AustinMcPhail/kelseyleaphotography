<script>
  import {urlFor} from './sanityClient'

  /**
   * @type {{ cover: any; title: any; cost: any; features: string[]; url: string; }}
   */
  export let pack
</script>

<a class="item" href={pack.url}>
  {#if pack.cover}
    <div class="image image-left">
      <img src={urlFor(pack.cover).width(500).fit('fillmax').url()} alt={pack.cover.alt} />
    </div>
  {:else}
    <div class="empty image image-left">
      <div class="placeholder-left" />
    </div>
  {/if}

  <div>
    <div class="info">
      <h2>{pack.title}</h2>
      <h3>{pack.cost}</h3>
      <ul>
        {#each pack.features.filter((/** @type {string} */ f) => !!f) as feature}
          <li>{feature}</li>
        {/each}
      </ul>
    </div>
  </div>
  <div class="image image-right">
    {#if pack.cover}
      <img src={urlFor(pack.cover).width(500).fit('fillmax').url()} alt={pack.cover.alt} />
    {:else}
      <div class="placeholder-right" />
    {/if}
  </div>
</a>

<style>
  .empty {
    display: none;
  }

  a {
    border-top: 1px solid var(--dark);
    text-decoration: none;
    color: var(--dark);
    transition: transform 0.2s ease-in-out;
  }

  a:hover,
  a:focus {
    transform: scale(1.01);
  }

  .info {
    padding-inline: var(--space-1);
  }

  .item {
    display: grid;
    grid-template-columns: 1fr;
  }
  .item div.image {
    height: min(250px, 50vw);
  }
  .item div img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .item div.image-right {
    justify-content: flex-start;
  }
  .item div.image-right {
    justify-content: flex-end;
  }
  .item div.image-right img {
    clip-path: polygon(25% 0, 100% 0, 100% 100%, 0% 100%);
  }
  .item div.placeholder-left {
    height: 100%;
    width: 100%;
    background-color: var(--dark);
    clip-path: polygon(0 0, 100% 0, 75% 100%, 0% 100%);
  }
  .item div.placeholder-right {
    height: 100%;
    width: 100%;
    background-color: var(--dark);
    clip-path: polygon(25% 0, 100% 0, 100% 100%, 0% 100%);
  }
  h2 {
    font-family: var(--font-accent);
    font-size: var(--font-larger);
    margin-block: var(--space-1);
  }
  h3 {
    font-size: var(--font-big);
    font-weight: bold;
  }

  ul {
    display: flex;
    flex-direction: column;
    text-align: right;
    list-style: circle;
    padding-inline: var(--space-2);
    margin-block: var(--space-2);
    font-size: small;
  }
  li {
    list-style-position: inside;
  }

  .image-right {
    display: none;
  }
  @media (min-width: 768px) {
    .empty {
      display: block;
    }

    h2 {
      font-size: var(--font-largest);
    }
    h3 {
      font-size: var(--font-large);
    }
    ul {
      font-size: unset;
    }
    .item {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .image-right {
      display: flex;
    }
    .item div.image-left img {
      clip-path: polygon(0 0, 100% 0, 75% 100%, 0% 100%);
    }
  }
</style>
