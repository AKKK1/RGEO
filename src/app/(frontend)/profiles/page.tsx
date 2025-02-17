import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Profile, Post } from '@/payload-types'
import { fetchProfilesWithPosts } from './fetchProfilesWithPosts'

export default async function Profiles() {
  const profilesWithPosts = (await fetchProfilesWithPosts()) || []

  if (!profilesWithPosts || profilesWithPosts.length === 0) {
    return notFound()
  }

  return (
    <div className="container mx-auto px-4 pt-24 pb-24">
      <h1 className="text-4xl font-bold mb-8 text-center">პროფილები (თეგები)</h1>

      {profilesWithPosts.map((profile: Profile & { posts: Post[] }) => (
        <div key={profile.id} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{profile.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profile.posts.map((post: Post) => (
              <Link href={`/posts/${post.slug}`} key={post.id} className="block">
                <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-medium mb-2">{post.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
