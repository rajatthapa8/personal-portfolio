import { Block } from 'payload'

export const ContactFormBlock: Block = {
  slug: 'contactForm',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
  ],
}
