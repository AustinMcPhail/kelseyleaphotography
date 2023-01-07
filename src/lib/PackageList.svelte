<script>
  import PackagePreview from './PackagePreview.svelte'

  /**
   * @type {any[]}
   */
  export let packages = []
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
