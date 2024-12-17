import { authenticated } from '@/access/authenticated'
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'
import type { CollectionConfig } from 'payload'


export const SliderInfo: CollectionConfig = {
  slug: 'SliderInfo',
  access: {
     create: authenticated,
     delete: authenticated,
     read: authenticatedOrPublished,
     update: authenticated,
   },
   defaultPopulate: {
    title: true,
    slug: true,
    categories: true,
    meta: {
      image: true,
      description: true,
    },
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
}
