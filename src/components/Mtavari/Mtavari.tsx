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
import { Button, DatePicker } from '@payloadcms/ui'
import DatePickerValue from './DatePickerValue'

export const Mtavari: React.FC<Page['hero']> = ({ links, media, richText }) => {
  const { setHeaderTheme } = useHeaderTheme()

  //   useEffect(() => {
  //     setHeaderTheme('dark')
  //   })

  return (
    <div
      className="relative h-[40vh] -mt-[60px] flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/assets/des.png')",
        backgroundSize: 'cover', // სურათი დაიკავებს მთელ არეს, არ დაიჭირებს
        backgroundPosition: 'center', // სურათი ცენტრში იქნება
        backgroundRepeat: 'no-repeat', // სურათი არ განმეორდება
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        {' '}
        <h1
          className="
  text-4xl sm:text-5xl md:text-6xl lg:text-[90px] 
  font-poppins font-light 
  leading-tight sm:leading-tight md:leading-tight lg:leading-[120px] 
  mb-4 sm:mb-6 md:mb-8 lg:mb-[32px] 
  mt-16 sm:mt-20 md:mt-24 lg:mt-[8.4rem] 
  px-4 sm:px-6 md:px-8
"
        >
          ყველანი შენს გვერდით
        </h1>
        <Button>მოძებნე</Button>
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
    </div>
  )
}
