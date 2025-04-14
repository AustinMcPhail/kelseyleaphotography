import { defineField, defineType } from "sanity";
import { BookIcon } from "@sanity/icons";

export const Album = defineType({
    name: 'album',
    type: 'document',
    title: 'Album',
    icon: BookIcon,
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
            description: 'Used in the url of this Album on the website',
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
            name: 'quote',
            type: 'string',
            title: 'Quote',
            description: "The quote that appears on the Album's Gallery page."
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
            description: 'Image that appears within the link to the album in the Gallery.',
            readOnly: false
        }),
        defineField({
            name: 'showOnHome',
            type: 'boolean',
            title: 'Display on Home Page',
            description: 'Photos from this album will be shown on the Homepage.'
        })
    ],
    initialValue: async () => {
        return {
            showOnHome: true
        }
    }
});