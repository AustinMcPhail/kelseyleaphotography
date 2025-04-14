import { ImageIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const Photo = defineType({
  name: 'photo',
  type: 'document',
  title: 'Photo',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      title: 'Photo',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.',
          validation: (Rule) => Rule.error('You have to fill out the alternative text.').required(),
        }
      ],
      readOnly: false
    }),
    defineField({
      name: 'album',
      title: 'album',
      type: 'albumReference',
      validation: (Rule) => Rule.error('You have to select an Album.').required()
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: 'This can be used to schedule post for publishing.',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'h:mm a'
      }
    }),
    defineField({
      name: 'showOnHome',
      type: 'boolean',
      title: 'Display on Home Page',
      description: 'Photos from this album will be shown on the Homepage.'
    })
  ],
  initialValue: {
    publishedAt: new Date().toISOString(),
    showOnHome: false
  },
  preview: {
    select: {
      title: 'image.alt',
      media: 'image',
      subtitle: 'publishedAt'
    },
    prepare(selection) {
      const {title, media, subtitle} = selection
      const date = new Date(subtitle).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        timeZoneName: 'short'
      })
      return {
        title: title,
        media: media,
        subtitle: date
      }
    }
  }
});
