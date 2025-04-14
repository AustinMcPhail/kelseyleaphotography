import { defineField, defineType } from "sanity";
import { BasketIcon } from '@sanity/icons'

export const Package = defineType({
  name: 'package',
  type: 'document',
  icon: BasketIcon,
  title: 'Package',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Used in the url of this Package on the website.',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (Rule) =>
        Rule.required().custom((slug) => {
          if (!slug || !slug.current) {
              return 'Slug is required'
          }
          if (slug.current.match(/[^a-z0-9-]/)) {
            return 'Slug must be lowercase and only contain url-safe characters (a-z, 0-9, -). Tap the generate button to create a safe slug.'
          }
          return true
        })
    }),
    defineField({
      title: 'Cost',
      name: 'cost',
      type: 'string',
      description: 'The starting cost of the Package. eg. $100',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      title: 'Features',
      name: 'features',
      type: 'array',
      description: 'The main features of this package. Up to 3 will be displayed in the preview.',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required()
    }),
    defineField({
      title: 'Addons',
      name: 'addons',
      type: 'array',
      description: 'The extra of this package. eg. Additional family member - $25',
      of: [{type: 'string'}]
    }),
    defineField({
      title: 'Blurb',
      name: 'blurb',
      type: 'text',
      description: 'Any extra details you want to include at the bottom of the Package.'
    }),
    defineField({
      name: 'quote',
      type: 'string',
      title: 'Quote',
      description: "The quote that appears on the Packages's page."
    }),
    defineField({
      title: 'Splash Image',
      name: 'splash',
      type: 'string',
      description: 'The little image displayed behind the title of the page.',
      options: {
        list: ['travel', 'heart'],
        layout: 'radio'
      }
    }),
    defineField({
      name: 'cover',
      type: 'siteImage',
      title: 'Cover Image',
      description: 'Image that appears within the link to the package in the Package listing.',
      readOnly: false
    }),
    defineField({
      name: 'img1',
      type: 'siteImage',
      title: 'Preview Image 1',
      description: 'Image that appears first on the Package page.',
      readOnly: false
    }),
    defineField({
      name: 'img2',
      type: 'siteImage',
      title: 'Preview Image 2',
      description: 'Image that appears second on the Package page.',
      readOnly: false
    }),
    defineField({
      title: 'FAQ',
      name: 'faq',
      type: 'array',
      description: 'The main features of this package. Up to 3 will be displayed in the preview.',
      of: [{type: 'questionAnswer'}],
      validation: (Rule) => Rule.max(4)
    })
  ]
});
