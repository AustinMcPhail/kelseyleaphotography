<script>
  import AlbumGrid from '../../lib/AlbumGrid.svelte'
  import PageTitle from '../../lib/PageTitle.svelte'
  export let data
  export let albums = data.albums ?? []
</script>

<PageTitle title="Gallery" quote="Beauty can be found in all things." splash="heart" />
<AlbumGrid {albums} />
