import { Post as PayloadPost, Profile as PayloadProfile } from '../../../payload-types'

export type Profile = PayloadProfile

export interface Post {
  // ... other fields
  profiles?: (string | Profile)[] | null;
  // ... other fields
}

export function isProfileObject(profile: string | Profile): profile is Profile {
  return typeof profile === 'object' && profile !== null && 'id' in profile
}