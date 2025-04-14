<script>
  import PackagePreview from './PackagePreview.svelte'

  
  /**
   * @typedef {Object} Props
   * @property {any[]} [packages]
   */

  /** @type {Props} */
  let { packages = [] } = $props();
</script>

<div class="list">
  {#each packages as p}
    <PackagePreview pack={p} />
  {/each}
</div>

<style>
  .list {
    display: flex;
    flex-direction: column;
  }
</style>
