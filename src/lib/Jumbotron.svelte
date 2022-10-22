<script>
  import {onMount} from 'svelte'
  import { fade } from 'svelte/transition'
  import {urlFor} from './sanityClient'

  /** @type {any} */
  export let photos = []
  let index = 0
  $: nextIndex = index === photos.length - 1 ? 0 : index + 1
  $: prevIndex = index === 0 ? photos.length - 1 : index - 1
  $: image = photos[index]

  /** @type {ReturnType<setInterval>|null} */
  let timeout
  function next() {
    state = 'next'
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      index = nextIndex
      image = photos[index]
      state = ''
    }, 500)
  }
  function prev() {
    state = 'prev'
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      index = prevIndex
      image = photos[index]
      state = ''
    }, 500)
  }

  $: state = ''
  /** @type {ReturnType<setInterval>|null} */
  let interval
  onMount(() => {
    interval = setInterval(() => {
      next()
    }, 5000)
  })

  function getMobileImage(/** @type {any} */ photo) {
    return urlFor(photo.image).height(1000).width(500).url();
  }
  function getDesktopImage(/** @type {any} */ photo) {
    return urlFor(photo.image).height(1000).width(1500).url();
  }
</script>

<svelte:head>
  {#each photos as photo}
    <link rel="preload" as="image" href={getMobileImage(photo)}>
    <link rel="preload" as="image" href={getDesktopImage(photo)}>
  {/each}
</svelte:head>

{#key index}
  <div id="wrapper">
      {#if state == ''}
        <img out:fade class="mobile" src={getMobileImage(photos[index])} alt={photos[index].image.alt || ''} />
        <img out:fade class="desktop" src={getDesktopImage(photos[index])} alt={photos[index].image.alt || ''} />
      {:else if state == 'next'}
        <img in:fade class="mobile" src={getMobileImage(photos[nextIndex])} alt={photos[nextIndex].image.alt || ''} />
        <img in:fade class="desktop" src={getDesktopImage(photos[nextIndex])} alt={photos[nextIndex].image.alt || ''} />
      {:else if state =='prev'}
        <img in:fade class="mobile" src={getMobileImage(photos[prevIndex])} alt={photos[prevIndex].image.alt || ''} />
        <img in:fade class="desktop" src={getDesktopImage(photos[prevIndex])} alt={photos[prevIndex].image.alt || ''} />
      {/if}
    <div id="controls">
      <button
        on:click={() => {
          if (interval) clearInterval(interval)
          prev()
        }}>&larr;</button
      >
      <a rel="prefetch" href="/gallery/{image.album?.album?.slug?.current}">View Album</a>
      <button
        on:click={() => {
          if (interval) clearInterval(interval)
          next()
        }}>&rarr;</button
      >
    </div>
  </div>
{/key}

<style>
  #wrapper {
    margin-top: var(--space-4);
    position: relative;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    box-shadow: inset 0px -10rem 50px 0px rgba(0, 0, 0, 0.5);
  }

  #wrapper img {
    position: absolute;
  }

  img.desktop {
    display: none;
  }

  img.desktop, img.mobile {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  @media (min-width: 768px) {
    #wrapper {
      height: 1000px;
    }
    img.mobile {
      display: none;
    }
    img.desktop {
      display: block;
    }
  }

  #wrapper #controls {
    position: absolute;

    display: flex;
    align-items: center;
    gap: var(--space-2);
    margin-bottom: var(--space-2);
    color: var(--light);
  }

  #wrapper #controls button {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
  }

  @media (min-width: 768px) {
    #wrapper #controls {
      margin-bottom: var(--space-6);
    }
  }

  #wrapper #controls a {
    text-decoration: none;
    text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
  }

  button {
    cursor: pointer;
    text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
  }
</style>
