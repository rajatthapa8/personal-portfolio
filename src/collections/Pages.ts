import { CollectionConfig } from 'payload'
import { ContactFormBlock } from '@/app/blocks/ContactFormBlock'
import { AboutUsBlock } from '@/app/blocks/AboutUsBlock'
import { ProjectBlock } from '@/app/blocks/ProjectsBlock'
export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'slug',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'slug',
      type: 'text',
      required: true,
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [ContactFormBlock, AboutUsBlock, ProjectBlock],
    },
  ],
}
