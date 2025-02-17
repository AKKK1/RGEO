import React from 'react'
import Image from 'next/image'
import type { Post } from '@/payload-types'
import { formatAuthors } from '@/utilities/formatAuthors'

export default async function profiles() {
  return (
    <div className="container mx-auto px-4 pt-24 pb-24">
      <h1 className="text-4xl font-bold mb-8 text-center">პროფილები </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">კიანუ რივზი</h2>
          <p className="text-gray-700">სოლ გუდმენი </p>
        </div>
      </div>
    </div>
  )
}
