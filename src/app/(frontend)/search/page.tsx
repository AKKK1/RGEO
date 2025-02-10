// import type { Metadata } from 'next/types'

// import { CollectionArchive } from '@/components/CollectionArchive'
// import configPromise from '@payload-config'
// import { getPayload } from 'payload'
// import React from 'react'
// import { Post } from '@/payload-types'
// import { Search } from '@/search/Component'
// import PageClient from './page.client'
// import { CardPostData } from '@/components/Card'

// type Args = {
//   searchParams: Promise<{
//     q: string
//   }>
// }
// export default async function Page({ searchParams: searchParamsPromise }: Args) {
//   const { q: query } = await searchParamsPromise
//   const payload = await getPayload({ config: configPromise })

//   const posts = await payload.find({
//     collection: 'search',
//     depth: 1,
//     limit: 12,
//     select: {
//       title: true,
//       slug: true,
//       categories: true,
//       meta: true,
//       date: true,
//     },
//     // pagination: false reduces overhead if you don't need totalDocs
//     pagination: true,
//     ...(query
//       ? {
//           where: {
//             or: [
//               {
//                 title: {
//                   like: query,
//                 },
//               },
//               {
//                 'meta.description': {
//                   like: query,
//                 },
//               },
//               {
//                 'meta.title': {
//                   like: query,
//                 },
//               },
//               {
//                 slug: {
//                   like: query,
//                 },
//               },
//             ],
//           },
//         }
//       : {}),
//   })

//   return (
//     <div className="pt-24 pb-24">
//       <PageClient />
//       <div className="container mb-16">
//         <div className="prose dark:prose-invert max-w-none text-center">
//           <h1 className="mb-8 lg:mb-16 text-white">მოძებნე</h1>

//           <div className="max-w-[50rem] mx-auto">
//             <Search />
//           </div>
//         </div>
//       </div>

//       {posts.totalDocs > 0 ? (
//         <CollectionArchive posts={posts.docs as CardPostData[]} />
//       ) : (
//         <div className="container">არაფერი მოიძებნა.</div>
//       )}
//     </div>
//   )
// }

// export function generateMetadata(): Metadata {
//   return {
//     title: `Evidence Georgia Search`,
//   }
// }

import type { Metadata } from 'next/types'
import { CollectionArchive } from '@/components/CollectionArchive'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import { Search } from '@/search/Component'
import PageClient from './page.client'
import { CardPostData } from '@/components/Card'
import SearchFilters from './SearchFilters'

type Args = {
  searchParams: {
    q?: string
    date?: string
    category?: string
  }
}

export default async function Page({ searchParams }: Args) {
  const { q: query, date, category } = searchParams
  const payload = await getPayload({ config: configPromise })

  const where: any = {}

  if (query) {
    where.or = [
      { title: { like: query } },
      { 'meta.description': { like: query } },
      { 'meta.title': { like: query } },
      { slug: { like: query } },
    ]
  }

  if (date) {
    where.and = where.and || []
    where.and.push(
      { createdAt: { greater_than_equal: new Date(date).toISOString() } },
      { createdAt: { less_than: new Date(new Date(date).getTime() + 86400000).toISOString() } },
    )
  }

  if (category) {
    where.and = where.and || []
    where.and.push({ 'categories.title': { equals: category } })
  }

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 12,
    where,
    sort: '-createdAt',
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
      createdAt: true,
    },
    pagination: true,
  })

  return (
    <div className="pt-24 pb-24">
      <PageClient />
      <div className="container mb-16">
        <div className="prose dark:prose-invert max-w-none text-center">
          <h1 className="mb-8 lg:mb-16 text-white">მოძებნე</h1>

          <div className="max-w-[50rem] mx-auto">
            <Search />
            <div className="mt-4 flex justify-center">
              <SearchFilters />
            </div>
          </div>
        </div>
      </div>

      {posts.totalDocs > 0 ? (
        <CollectionArchive posts={posts.docs as unknown as CardPostData[]} />
      ) : (
        <div className="container">არაფერი მოიძებნა.</div>
      )}
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Evidence Georgia Search`,
  }
}
