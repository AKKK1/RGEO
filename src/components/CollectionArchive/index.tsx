// import { cn } from 'src/utilities/cn'
// import React from 'react'

// import type { Post } from '@/payload-types'

// import { Card, CardPostData } from '@/components/Card'

// export type Props = {
//   posts: CardPostData[]
// }

// export const CollectionArchive: React.FC<Props> = (props) => {
//   const { posts } = props

//   return (
//     <div className={cn('container')}>
//       <div>
//         <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-2 gap-x-4 lg:gap-y-8 lg:gap-x-8 xl:gap-x-8 bg-white">
//           {posts?.map((result, index) => {
//             if (typeof result === 'object' && result !== null) {
//               return (
//                 <div className="col-span-4 text-white " key={index}>
//                   <Card
//                     className="h-full text-white"
//                     doc={result}
//                     relationTo="posts"
//                     showCategories
//                   />
//                 </div>
//               )
//             }

//             return null
//           })}
//         </div>
//       </div>
//     </div>
//   )
// }
import { cn } from 'src/utilities/cn'
import React from 'react'

import type { Post } from '@/payload-types'

import { Card, CardPostData } from '@/components/Card'

export type Props = {
  posts: CardPostData[]
}

export const CollectionArchive: React.FC<Props> = (props) => {
  const { posts } = props

  // ლიმიტი 8 პოსტამდე (4 სვეტი * 2 რიგი)
  const limitedPosts = posts.slice(0, 8)

  return (
    <div className={cn('container lg:max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 ')}>
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {limitedPosts.map((result, index) => {
            if (typeof result === 'object' && result !== null) {
              return (
                <div key={index} className="text-white w-full font-helvetica">
                  <Card
                    className="h-full text-black w-full shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out group/color"
                    doc={result}
                    relationTo="posts"
                    showCategories
                  />
                </div>
              )
            }

            return null
          })}
        </div>
      </div>
    </div>
  )
}
