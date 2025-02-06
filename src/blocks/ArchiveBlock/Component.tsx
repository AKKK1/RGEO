import type { Post, ArchiveBlock as ArchiveBlockProps } from '@/payload-types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import RichText from '@/components/RichText'

import { CollectionArchive } from '@/components/CollectionArchive'
import { Cctv } from 'lucide-react'

export const ArchiveBlock: React.FC<
  ArchiveBlockProps & {
    id?: string
  }
> = async (props) => {
  const { id, categories, introContent, limit: limitFromProps, populateBy, selectedDocs } = props

  const limit = limitFromProps || 3

  let posts: Post[] = []

  if (populateBy === 'collection') {
    const payload = await getPayload({ config: configPromise })

    const flattenedCategories = categories?.map((category) => {
      if (typeof category === 'object') return category.id
      else return category
    })

    const fetchedPosts = await payload.find({
      collection: 'posts',
      depth: 1,
      limit,
      ...(flattenedCategories && flattenedCategories.length > 0
        ? {
            where: {
              categories: {
                in: flattenedCategories,
              },
            },
          }
        : {}),
    })

    posts = fetchedPosts.docs
  } else {
    if (selectedDocs?.length) {
      const filteredSelectedPosts = selectedDocs.map((post) => {
        if (typeof post.value === 'object') return post.value
      }) as Post[]

      posts = filteredSelectedPosts
    }
  }

  return (
    <div className="my-16 bg-black text-white bg-black" id={`block-${id}`}>
      {introContent && (
        <div className="container  lg:w-973px mx-auto px-4 mb-16 bg-">
          <div className="flex items-center justify-center gap-3">
            <Cctv className="w-10 h-10" />
            <RichText
              className="!text-white [&_*]:!text-white font-helvetica  max-w-[48rem]"
              data={introContent}
              enableGutter={false}
            />
            <Cctv className="w-10 h-10 transform  scale-x-[-1]" />
          </div>
        </div>
      )}
      <CollectionArchive posts={posts} />
    </div>
  )
}
