<script>
  import AlbumGrid from '../../lib/AlbumGrid.svelte'
  import PageTitle from '../../lib/PageTitle.svelte'
  let { data, albums = data.albums ?? [] } = $props();
</script>

<PageTitle title="Gallery" quote="Beauty can be found in all things." splash="heart" />
<AlbumGrid {albums} />
