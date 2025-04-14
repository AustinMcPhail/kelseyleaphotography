import { defineField, defineType } from "sanity";

export const AlbumReference = defineType({
  name: 'albumReference',
  type: 'object',
  title: 'Album reference',
  fields: [
    defineField({
      name: 'album',
      type: 'reference',
      to: [
        {
          type: 'album'
        }
      ]
    })
  ],
  preview: {
    select: {
      title: 'album.name',
      cover: 'album.cover.asset'
    }
  }
});
