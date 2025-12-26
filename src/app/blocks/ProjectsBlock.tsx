import { Block } from 'payload'

export const ProjectBlock: Block = {
  slug: 'projectBlock',

  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'projects',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'link',
          type: 'text',
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
}
