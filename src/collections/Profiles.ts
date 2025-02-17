import type { CollectionConfig } from 'payload'
import { slugField } from '@/fields/slug'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

export const Profiles: CollectionConfig = {
  slug: 'Profiles',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'updatedAt'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
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
    {
      name: 'socialLinks',
      type: 'array',
      fields: [
        {
          name: 'platform',
          type: 'select',
          options: ['Twitter', 'Facebook', 'LinkedIn', 'Instagram', 'Website'],
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
    },
    ...slugField(),
  ],
}