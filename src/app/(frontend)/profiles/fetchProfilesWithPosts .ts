import { PROFILES_WITH_POSTS } from '@/app/_graphql/profiles'
import { Profile, Post } from '@/payload-types'
import { gqlFetcher } from '@/utilities/graphql'

export const fetchProfilesWithPosts = async (): Promise<(Profile & { posts: Post[] })[]> => {
  const {
    profiles: { docs },
  } = await gqlFetcher({
    query: PROFILES_WITH_POSTS,
    variables: {
      limit: 100,
    },
  })

  return docs
}