<!-- @migration-task Error while migrating Svelte code: can't migrate `let index = 0` to `$state` because there's a variable named state.
     Rename the variable and try again or migrate by hand. -->
<script>
  import {onMount} from 'svelte'
  import {fade} from 'svelte/transition'
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

  function getDesktopImage(/** @type {any} */ photo) {
    return urlFor(photo.image).maxHeight(500).maxWidth(1000).url()
  }
</script>

{#key index}
  <div id="wrapper">
    {#if state == ''}
      <img out:fade|global src={getDesktopImage(photos[index])} alt={photos[index].image.alt || ''} />
    {:else if state == 'next'}
      <img
        in:fade|global
        src={getDesktopImage(photos[nextIndex])}
        alt={photos[nextIndex].image.alt || ''}
      />
    {:else if state == 'prev'}
      <img
        in:fade|global
        src={getDesktopImage(photos[prevIndex])}
        alt={photos[prevIndex].image.alt || ''}
      />
    {/if}
    <div id="controls">
      <button
        on:click={() => {
          if (interval) clearInterval(interval)
          prev()
        }}>&larr;</button
      >
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
    position: relative;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  #wrapper img {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  #wrapper #controls {
    position: absolute;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-2);
    color: var(--light);
  }

  #wrapper #controls button {
    cursor: pointer;
    color: black;
    background: var(--light);
    border: none;
    padding-inline: 5px;
    padding-block: 2px;
    border-radius: 5px;
    border-end-end-radius: 0;
    border-end-start-radius: 0;
    opacity: 0.5;
  }
  #wrapper #controls button:first-child {
    border-start-start-radius: 0;
  }
  #wrapper #controls button:last-child {
    border-start-end-radius: 0;
  }
</style>
