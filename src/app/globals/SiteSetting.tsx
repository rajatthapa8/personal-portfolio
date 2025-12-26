import { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site Settings',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'siteName',
      type: 'text',
      required: true,
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'headerNav',
      label: 'Header Navigation',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
    },

    {
      name: 'footerText',
      type: 'textarea',
    },

    {
      name: 'socials',
      type: 'array',
      label: 'Social Media',
      fields: [
        {
          name: 'Facebook',
          type: 'text',
        },
        {
          name: 'Twitter',
          type: 'text',
        },
        {
          name: 'Github',
          type: 'text',
        },
        {
          name: 'Linkedin',
          type: 'text',
        },
      ],
    },
  ],
}
