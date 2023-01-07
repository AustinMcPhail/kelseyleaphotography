<script>
  import {urlFor} from './sanityClient'

  /** @type {any} */
  export let image
  export let maxWidth = 1200
  export let maxHeight = 1200
  /** @type {string|undefined} */
  export let alt = undefined
  export let styles = ''
  export let classes = ''
  export let id = ''

  /** @type {number} */
  export let height = 0

  /** @type {any} */
  export let fit = 'fillmax'

  export let clickable = false
</script>

{#if image}
  <button on:click disabled={!clickable}>
    <img
      {id}
      loading="lazy"
      src={height
        ? urlFor(image).height(height).maxWidth(maxWidth).maxHeight(maxHeight).fit(fit).url()
        : urlFor(image).maxWidth(maxWidth).maxHeight(maxHeight).fit(fit).url()}
      alt={alt || image.alt || ''}
      style="transition: .2s all ease-in; {styles}; --image-url: url('${urlFor(image)
        .width(maxWidth)
        .height(maxHeight)
        .fit(fit)}')"
      class={`sanity-img ${classes}`}
    />
  </button>
{/if}

<style>
  button {
    border: none;
    background: none;
    padding: 0;
    margin: 0;
  }
  button:hover,
  button:focus {
    outline: none;
  }

  button:not(:disabled):hover img,
  button:not(:disabled):focus img {
    transform: scale(1.025);
  }
</style>
