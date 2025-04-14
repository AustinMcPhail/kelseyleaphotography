import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'kelseyleaphotography',

  projectId: 'tgdufnkq',
  dataset: 'develop',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
  
  document: {
    actions: (prev, {schemaType}) => {
      if (schemaType === 'siteSettings') {
        return prev.filter((item) => item.action === 'publish')
      }
      return prev
    }
  }
})
