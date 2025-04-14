<script>
  import {fade} from 'svelte/transition'
  /**
   * @typedef {Object} Props
   * @property {string} [url]
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { url = '', children } = $props();
</script>

<div class="transition-outer">
  {#key url}
    <div class="transition-inner" in:fade|global={{duration: 250}} out:fade|global={{duration: 250}}>
      {@render children?.()}
    </div>
  {/key}
</div>

<style>
  .transition-outer {
    display: grid;
    grid-template: 1fr 1fr;
  }
  .transition-inner {
    grid-row: 1;
    grid-column: 1;
  }
</style>
