'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
// import des from '@/media/des-1.png'
import defaultImage from 'public/media/des-1.png'
import Image from 'next/image'
import { Search } from 'lucide-react'

export const Mtavari: React.FC<Page['hero']> = ({ links, media, richText }) => {
  const { setHeaderTheme } = useHeaderTheme()

  //   useEffect(() => {
  //     setHeaderTheme('dark')
  //   })

  return (
    <div
      className="relative -mt-[10.4rem]  height-[50vh] lex items-center justify-center text-white  "
      style={{
        backgroundImage: "url('/media/des.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        {' '}
        <h1 className="text-[90px] font-poppins font-light leading-[120px] mb-[32px] -mt-[12.4rem">
          ყველანი შენს გვერდით
        </h1>
        <div className="max-w-xl mx-auto relative mt-10 ">
          <div className="relative ">
            <input
              type="text"
              placeholder="ძიება"
              className="w-[614px] pl-10 pr-4 py-2 rounded-full height-[44px]  bg-white bg-opacity-20 text-white placeholder-white border-2 focus:outline-none focus:border-blue-100"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white"
              size={20}
            />
          </div>
          <button>rame</button>
        </div>
      </div>

      <div className="container mb-8 z-10 relative flex items-center justify-center bg-green-600">
        <div className="max-w-[36.5rem] md:text-center bg-green-600">
          {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}
          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex md:justify-center gap-4">
              {links.map(({ link }, i) => {
                return (
                  <li key={i}>
                    <CMSLink {...link} />
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
      <div className="min-h-[50vh] select-none"></div>
    </div>
  )
}
