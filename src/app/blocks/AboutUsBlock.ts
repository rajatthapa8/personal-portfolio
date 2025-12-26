import { Block } from 'payload'

export const AboutUsBlock: Block = {
  slug: 'about-us',
  fields: [
    {
      name: 'bigHeading',
      type: 'text',
      required: true,
    },
    {
      name: 'smallText',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
