<script>
  import FAQ from './FAQ.svelte'

  import PackageAddons from './PackageAddons.svelte'

  import PackageFeatures from './PackageFeatures.svelte'
  import Contact from './Contact.svelte'
  import {siteStore} from '$lib/store'
  
  
  
  
  
  

  
  /**
   * @typedef {Object} Props
   * @property {any} previewImageOne
   * @property {any} previewImageTwo
   * @property {string} cost
   * @property {string[]} [features]
   * @property {string[]} [addons]
   * @property {string} [blurb]
   * @property {{question: string, answer: string}[]} [faq]
   * @property {string} title
   */

  /** @type {Props} */
  let {
    previewImageOne,
    previewImageTwo,
    cost,
    features = [],
    addons = [],
    blurb = '',
    faq = [],
    title
  } = $props();
</script>

<PackageFeatures {previewImageOne} {previewImageTwo} {cost} {features} />
{#if addons?.length || blurb}
  <PackageAddons {addons} {blurb} />
{/if}
{#if faq?.length}
  <FAQ qas={faq} />
{/if}
<Contact blocklist={$siteStore.blocklist ?? []} subject={'Photography Shoot: ' + title} />
