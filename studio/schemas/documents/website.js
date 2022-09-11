export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Website Settings',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'bioImage',
      type: 'siteImage',
      title: 'Home - Bio Image',
      description: 'Image that appears in your bio on the homepage.'
    },
    {
      name: 'bio1Title',
      type: 'string',
      title: 'Home - Top Bio Title',
      description: 'The title above the text in the light area of the homepage.'
    },
    {
      name: 'bio1',
      type: 'text',
      title: 'Home - Top Bio',
      description: 'The text in the light area of the homepage.'
    },
    {
      name: 'bio2Title',
      type: 'string',
      title: 'Home - Bottom Bio Title',
      description: 'The title that appears under the text in the dark area of the homepage.'
    },
    {
      name: 'bio2',
      type: 'text',
      title: 'Home - Bottom Bio',
      description: 'The text in the dark area of the homepage.'
    },
    {
      name: 'facebookUrl',
      type: 'string',
      title: 'Facebook Url',
      description: 'The link to your Facebook page.'
    },
    {
      name: 'instagramUrl',
      type: 'string',
      title: 'Instagram Url',
      description: 'The link to your Instagram page.'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your site for search engines and social media.'
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Add keywords that describes your blog.',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'blocklist',
      type: 'array',
      title: 'Blocklist',
      description:
        "Block emails from using your form. Will match parts. Example: 'crypto' would block 'crypto.user@gmail.com', 'random1@mycryptoacc.com', etc.",
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    }
  ]
}
