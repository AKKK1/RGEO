import { formatDateTime } from 'src/utilities/formatDateTime'
import React from 'react'

import type { Post } from '@/payload-types'

import { Media } from '@/components/Media'
import { formatAuthors } from '@/utilities/formatAuthors'

export const PostHero: React.FC<{
  post: Post
}> = ({ post }) => {
  const { categories, meta: { image: metaImage } = {}, populatedAuthors, publishedAt, title } = post

  const hasAuthors =
    populatedAuthors && populatedAuthors.length > 0 && formatAuthors(populatedAuthors) !== ''

  return (
    <div className="relative  flex items-end bg-blue-700 mt-[55px]">
      <div className="container z-10 relative lg:grid lg:grid-cols-[1fr_48rem_1fr] text-white pb-8 ">
        <div className="col-start-1 col-span-1 md:col-start-2 md:col-span-2 ">
          <div className="uppercase text-sm mb-6 ">
            {categories?.map((category, index) => {
              if (typeof category === 'object' && category !== null) {
                const { title: categoryTitle } = category

                const titleToUse = categoryTitle || 'Untitled category'

                const isLast = index === categories.length - 1

                return (
                  <React.Fragment key={index}>
                    {titleToUse}
                    {!isLast && <React.Fragment>, &nbsp;</React.Fragment>}
                  </React.Fragment>
                )
              }
              return null
            })}
          </div>

          <div className="">
            <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl">{title}</h1>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-16">
            {hasAuthors && (
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <p className="text-sm">Author</p>

                  <p>{formatAuthors(populatedAuthors)}</p>
                </div>
              </div>
            )}
            {publishedAt && (
              <div className="flex flex-col gap-1">
                <p className="text-sm">Date Published</p>

                <time dateTime={publishedAt}>{formatDateTime(publishedAt)}</time>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* <div className="min-h-[80vh] select-none">
        {metaImage && typeof metaImage !== 'string' && (
          <Media
            fill
            priority={false}
            loading="lazy"
            imgClassName="-z-10 object-cover"
            resource={metaImage}
          />
        )}
        <div className="absolute pointer-events-none left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent" />
      </div> */}
    </div>
  )
}

// import { formatDateTime } from 'src/utilities/formatDateTime'
// import React from 'react'

// import type { Post } from '@/payload-types'

// import { Media } from '@/components/Media'
// import { formatAuthors } from '@/utilities/formatAuthors'

// export const PostHero: React.FC<{ post: Post }> = ({ post }) => {
//   const { categories, meta: { image: metaImage } = {}, populatedAuthors, publishedAt, title } = post

//   const hasAuthors =
//     populatedAuthors && populatedAuthors.length > 0 && formatAuthors(populatedAuthors) !== ''

//   return (
//     <div className="container mx-auto px-4 py-8">
//       {/* Title and Info */}
//       <div className="flex flex-col md:flex-row items-start gap-6">
//         {/* Image */}
//         {metaImage && typeof metaImage !== 'string' && (
//           <div className="w-full md:w-1/3">
//             <Media
//               className="rounded-lg overflow-hidden"
//               imgClassName="object-cover w-full h-auto"
//               resource={metaImage}
//             />
//           </div>
//         )}
//         {/* Text Content */}
//         <div className="md:w-2/3 flex flex-col gap-4">
//           {/* Categories */}
//           {categories?.map((category, index) => (
//             typeof category === 'object' && category !== null && category.title ? (
//               <span key={index} className="bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full w-fit">
//                 {category.title}
//               </span>
//             ) : null
//           ))}
//           {/* Title */}
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h1>
//           {/* Meta Info */}
//           <div className="text-gray-600 text-sm flex gap-4">
//             {hasAuthors && <p>ავტორი: {formatAuthors(populatedAuthors)}</p>}
//             {publishedAt && <p>გამოქვეყნდა: {formatDateTime(publishedAt)}</p>}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
