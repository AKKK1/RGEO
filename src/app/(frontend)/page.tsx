// import PageTemplate, { generateMetadata } from './[slug]/page'

// export default PageTemplate

// export { generateMetadata }

'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Caru from '@/components/Carousel/Caru'
import { PhoneCall, Search, SearchIcon } from 'lucide-react'

const page = () => {
  return (
    <div className="w-full">
      {/* პირველი სექცია */}
      <section className="pt-15  h-[160px] w-full bg-white flex items-center justify-center flex-end px-6 shadow-md">
        <div className=" right-300 flex justify-center items-center gap-2">
          <div
            className="text-2xl font-bold text-[#000]
          rounded-full flex items-center justify-center gap-3 bg-green-500 py-3  px-10 right-10"
          >
            <PhoneCall className="text-white" />

            <p className="text-white">ადვოკატის დახმარება</p>
          </div>
          <div
            className="text-2xl font-bold text-[#000]
          rounded-full flex items-center justify-center gap-3 bg-green-500 py-3  px-10 right-10"
          >
            <PhoneCall className="text-white" />

            <p className="text-white">მედია</p>
          </div>
          <div
            className="text-black bg-cover h-18 w-18 "
            style={{
              backgroundImage: "url('/media/ragacnairisvg.svg')",
            }}
          >
            <p
              className="text-2xl font-bold text-[#000]
           flex items-center justify-center gap-3 py-3  px-10 right-10"
            >
              ჩვენს შესახებ
            </p>
          </div>
        </div>
      </section>

      {/* მეორე სექცია */}
      <section className="relative w-full h-[387px] flex justify-center items-center bg-white overflow-hidden">
        <div className="relative w-[1821px] h-[387px] mx-auto">
          <Image
            src="/media/main.svg" // სურათის ბილიკი
            alt="Background Image"
            layout="responsive" // Image ბლოკი გაწერს სურათს სრული კონტროლით
            width={1821}
            height={387}
            objectFit="cover"
            priority
            className="rounded-lg"
          />
          <h1 className="absolute inset-0 flex items-center justify-center text-center text-4xl sm:text-5xl font-bold uppercase text-black drop-shadow-[0_0_6px_rgb(255,255,255)] ">
            არა რუსულ რეჟიმს! <br /> დაიცავი საქართველო! <br /> ძალა ერთობაშია!
          </h1>
        </div>
      </section>

      {/* პოსტის ბლოკები */}
      <section className="flex flex-wrap justify-center gap-4 p-4 md:p-8 bg-white shadow-md">
        {/* თითოეული პოსტი */}
        <div className="h-[350px] w-[600px] bg-gray-100 rounded-md shadow p-4">
          <h3 className="text-lg font-semibold mb-2">პოსტი 1</h3>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac velit fermentum,
            dignissim ligula vitae, pretium purus.
          </p>
        </div>
        <div className="h-[350px] w-[600px] bg-gray-100 rounded-md shadow p-4">
          <h3 className="text-lg font-semibold mb-2">პოსტი 2</h3>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac velit fermentum,
            dignissim ligula vitae, pretium purus.
          </p>
          <Image src="/media/main.png" alt="rame" height={300} width={400} loading="lazy" />
        </div>
        <div className="h-[350px] w-[600px] bg-gray-100 rounded-md shadow p-4">
          <h3 className="text-lg font-semibold mb-2">პოსტი 3</h3>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac velit fermentum,
            dignissim ligula vitae, pretium purus.
          </p>
        </div>
      </section>

      {/* მესამე სექცია */}
      <section
        className="h-[910px] bg-[#ffffff] w-full flex items-center  justify-center px-4 bg-cover bg-center"
        style={{
          backgroundImage: "url('/media/omi.png')",
        }}
      >
        <div className="flex justify-center align-center flex-row text-center gap-30">
          {/* სლაიდერი */}

          <div className="w-full max-w-7xl">
            {/* აქ მოათავსე შენი სლაიდერი */}
            <Caru />
          </div>
        </div>
      </section>
    </div>
  )
}

export default page
