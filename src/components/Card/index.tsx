'use client'
import { cn } from '@/utilities/cn'
import useClickableCard from '@/utilities/useClickableCard'
import Link from 'next/link'
import React from 'react'
import { format } from 'date-fns'

import type { Post } from '@/payload-types'

import { Media } from '@/components/Media'

export type CardPostData = Pick<Post, 'slug' | 'categories' | 'meta' | 'title' | 'createdAt'>

export const Card: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: CardPostData
  relationTo?: 'posts'
  showCategories?: boolean
  title?: string
}> = (props) => {
  const { card, link } = useClickableCard({})
  const { className, doc, relationTo, showCategories, title: titleFromProps } = props

  const { slug, categories, meta, title, createdAt } = doc || {}
  const { description, image: metaImage } = meta || {}

  const hasCategories = categories && Array.isArray(categories) && categories.length > 0
  const titleToUse = titleFromProps || title
  const sanitizedDescription = description?.replace(/\s/g, ' ')
  const href = `/${relationTo}/${slug}`

  const formattedDate = createdAt ? format(new Date(createdAt), 'MMM dd, yyyy') : ''

  // return (
  //   <article
  //     className={cn(
  //       'border border-border rounded-lg overflow-hidden bg-card hover:cursor-pointer',
  //       className,
  //     )}
  //     ref={card.ref}
  //   >
  //     <div className="relative w-full ">
  //       {!metaImage && <div className="">No image</div>}
  //       {metaImage && typeof metaImage !== 'string' && <Media resource={metaImage} size="33vw" />}
  //     </div>
  //     <div className="p-4  bg-none">
  //       {showCategories && hasCategories && (
  //         <div className="uppercase text-md mb-4 text-white ">
  //           {showCategories && hasCategories && (
  //             <div>
  //               {categories?.map((category, index) => {
  //                 if (typeof category === 'object') {
  //                   const { title: titleFromCategory } = category

  //                   const categoryTitle = titleFromCategory || 'Untitled category'

  //                   const isLast = index === categories.length - 1

  //                   return (
  //                     <Fragment key={index}>
  //                       {categoryTitle}
  //                       {!isLast && <Fragment>, &nbsp;</Fragment>}
  //                     </Fragment>
  //                   )
  //                 }

  //                 return null
  //               })}
  //             </div>
  //           )}
  //         </div>
  //       )}
  //       {titleToUse && (
  //         <div className="bg-none [&_*]:!text-white prose ">
  //           <h3>
  //             <Link className="not-prose" href={href} ref={link.ref}>
  //               {titleToUse}
  //             </Link>
  //           </h3>
  //         </div>
  //       )}
  //       {description && (
  //         <div className="mt-2 text-white">{description && <p>{sanitizedDescription}</p>}</div>
  //       )}
  //     </div>
  //   </article>
  // )
  return (
    <article
      className={cn(
        'border border-border rounded-lg overflow-hidden bg-card hover:cursor-pointer',
        className,
      )}
      ref={card.ref}
    >
      <div className="relative w-full aspect-[4/3]">
        {!metaImage && <div className="w-full h-full bg-gray-200">No image</div>}
        {metaImage && typeof metaImage !== 'string' && (
          <Media resource={metaImage} fill className="object-cover" />
        )}
        {showCategories && hasCategories && (
          <div className="absolute top-0 right-0 flex flex-wrap justify-end group">
            {categories?.map((category, index) => {
              if (typeof category === 'object') {
                const { title: titleFromCategory } = category
                const categoryTitle = titleFromCategory || 'Untitled category'
                return (
                  <span
                    key={index}
                    className="py-2 px-4 text-xs font-poppins font-bold uppercase rounded-bl-2xl bg-[#ca4345] group-hover/color:bg-[#2e3488] text-white"
                  >
                    {categoryTitle}
                  </span>
                )
              }
              return null
            })}
          </div>
        )}
      </div>
      <div className="p-4 bg-none">
        <div className="text-xs font-poppins text-gray-300 mb-2">{formattedDate}</div>
        {titleToUse && (
          <h3 className="font-poppins font-semibold text-lg mb-2 text-white">
            <Link href={href} ref={link.ref} className="hover:underline">
              {titleToUse}
            </Link>
          </h3>
        )}
        {description && (
          <p className="font-poppins text-sm text-gray-200 line-clamp-2 ">{sanitizedDescription}</p>
        )}
      </div>
    </article>
  )
}
