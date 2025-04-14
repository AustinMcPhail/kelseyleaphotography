import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import {projectId, dataset} from '../../sanity.json'

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2021-10-21',
  useCdn: true
})

const builder = imageUrlBuilder(client)
/** @type {(s: string) => ReturnType<import('@sanity/image-url/lib/types')>} */
export const urlFor = (source) => {
  return builder.image(source)
}
