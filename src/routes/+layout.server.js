import {getSiteQuery} from '$lib/queries'
import {client} from '$lib/sanityClient'
import {error} from '@sveltejs/kit'

export const prerender = true

/** @type {import('./$types').LayoutServerLoad} */
export async function load({url}) {
  const {site} = await client.fetch(`{
        "site": ${getSiteQuery()},
    }`)

  if (!site[0]) throw error(404, 'Could not get site settings')

  return {
    url: url.href,
    site: site[0]
  }
}
