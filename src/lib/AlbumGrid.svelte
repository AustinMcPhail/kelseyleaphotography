<script>
  import AlbumPreview from './AlbumPreview.svelte'

  
  /**
   * @typedef {Object} Props
   * @property {any[]} [albums]
   */

  /** @type {Props} */
  let { albums = [] } = $props();
</script>

<div class="grid">
  {#each albums as album}
    <AlbumPreview title={album.title} cover={album.cover} linkToAlbum={album.url} />
  {/each}
</div>

<style>
  .grid {
    padding-inline: var(--space-2);
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: 250px;
    gap: 1rem;
    margin-block-end: var(--space-6);
  }
</style>
