import { Post as PayloadPost, Profile as PayloadProfile } from '../../../payload-types'

export type Profile = PayloadProfile

export interface Post extends PayloadPost {
  profiles: (string | Profile)[]
}

export function isProfileObject(profile: string | Profile): profile is Profile {
  return typeof profile === 'object' && profile !== null && 'id' in profile
}