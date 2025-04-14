<script>
  import { createBubbler } from 'svelte/legacy';

  const bubble = createBubbler();
  import {urlFor} from './sanityClient'

  
  

  

  

  /**
   * @typedef {Object} Props
   * @property {any} image
   * @property {number} [maxWidth]
   * @property {number} [maxHeight]
   * @property {string|undefined} [alt]
   * @property {string} [styles]
   * @property {string} [classes]
   * @property {string} [id]
   * @property {number} [height]
   * @property {any} [fit]
   * @property {boolean} [clickable]
   */

  /** @type {Props} */
  let {
    image,
    maxWidth = 1200,
    maxHeight = 1200,
    alt = undefined,
    styles = '',
    classes = '',
    id = '',
    height = 0,
    fit = 'fillmax',
    clickable = false
  } = $props();
</script>

{#if image}
  <button onclick={bubble('click')} disabled={!clickable}>
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
  img {
    height: 100%;
    width: 100%;
  }
  button {
    height: 100%;
    width: 100%;
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
