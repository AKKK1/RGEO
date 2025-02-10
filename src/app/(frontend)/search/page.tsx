import type { Metadata } from 'next/types'
import { CollectionArchive } from '@/components/CollectionArchive'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import { Search } from '@/search/Component'
import PageClient from './page.client'
import { CardPostData } from '@/components/Card'
import SearchFilters from './SearchFilters'

type SearchParams = {
  q?: string
  date?: string
  category?: string
}

interface PageProps {
  searchParams: SearchParams
}

type WhereClause = {
  or?: Array<{
    [key: string]: {
      like?: string
      equals?: string
    }
  }>
  and?: Array<{
    [key: string]: {
      greater_than_equal?: string
      less_than?: string
      equals?: string
    }
  }>
}

export default async function Page({ searchParams }: PageProps) {
  const { q: query, date, category } = searchParams
  const payload = await getPayload({ config: configPromise })

  const where: WhereClause = {}

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
