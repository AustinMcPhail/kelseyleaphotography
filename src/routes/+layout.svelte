<script>
  import '../style.css'
  import Header from '../lib/Header.svelte'
  import Footer from '../lib/Footer.svelte'
  import Transition from '../lib/Transition.svelte'
  import {siteStore} from '../lib/store'
  import {urlFor} from '../lib/sanityClient'
  import { page } from '$app/state';

  let { data, children } = $props();

  const url = page.url.pathname
  const site = data.site
  const bioImage = data.bioImage
  $siteStore = site
</script>

<svelte:head>
  <title>{site.title}</title>
  <meta name="description" content={site.description ?? "Kelsey Lea's Photography Portfolio"} />
  <meta name="keywords" content={site.keywords?.join(', ') ?? 'Photography'} />
  {#if bioImage && bioImage.asset}
    <meta property="og:image" content={urlFor(site.bioImage).width(500).height(500).url()} />
  {/if}
</svelte:head>

<Header facebookUrl={''} instagramUrl={''} />
<div>
  <main>
    <Transition {url}>
      {@render children?.()}
    </Transition>
  </main>
  <Footer facebookUrl={site.facebookUrl} instagramUrl={site.instagramUrl} />
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  main {
    flex: 1;
  }
</style>
