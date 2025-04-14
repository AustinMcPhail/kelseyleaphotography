import { defineField, defineType } from "sanity"

export const QuestionAnswer = defineType({
  name: 'questionAnswer',
  type: 'object',
  title: 'Question & Answer',
  fields: [
    defineField({
      name: 'question',
      type: 'string',
      title: 'Question',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'answer',
      type: 'text',
      title: 'Answer',
      validation: (Rule) => Rule.required(),
    })
  ]
});
