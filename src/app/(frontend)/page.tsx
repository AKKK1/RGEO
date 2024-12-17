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

const CaruContent = [
  {
    image: '/media/bane.png',
    alt: 'First slide',
  },
  {
    image: '/media/bane.png',
    alt: 'Second slide',
  },
  {
    image: '/media/main.png',
    alt: 'Third slide',
  },
  {
    image: '/media/4.jpg',
    alt: 'Fourth slide',
  },
]

const page = () => {
  return (
    <main className="bg-gray-100">
      {/* სლაიდერის ადგილი */}

      <section className="relative z-10 w-full h-[1010px]  flex items-center justify-center ">
        <Image
          src="/media/main.png" // იგივე სურათი ან სხვა
          alt="Background Image"
          layout="fill" // სურათს სექციის მთელ სივრცეს აძლევს
          objectFit="cover" // სურათის გასწორება კონტეინერში
          className="absolute top-0 left-0 z-0 " // ფონური სტილი
        />
        <Carousel className="relative w-full max-w-[1200px] h-[600px]  items-center ">
          <CarouselContent className="gap-2 max-w-[1100px] h-[600px] rounded-[53px]">
            {CaruContent.map((slide, index) => (
              <CarouselItem key={index} className="border rounded-[53px]">
                <div className="p-1 rounded-full">
                  <Card className="rounded-[53px] bg-none">
                    <CardContent className="flex h-[610px] items-center justify-center p-6 rounded-[53px]">
                      {/* სურათი */}
                      <Image
                        src={slide.image}
                        alt={slide.alt}
                        layout="fill"
                        objectFit="cover"
                        className="z-0" // სურათი დადგება ზურგზე
                      />
                      <div className="z-40 gap-9 flex flex-col p-3">
                        <h1 className="text-5xl font-semibold z-30">
                          {slide.alt} {/* ალტ ტექსტი */}
                        </h1>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* ბანერი */}
      <section className="bg-yellow-400 py-2 text-center">
        <p className="text-black font-bold text-lg">ჩვენი მესიჯი აქ!</p>
      </section>

      {/* სიახლეების ბლოკი */}
      <section className="container mx-auto my-8 px-4">
        <h2 className="text-2xl font-bold text-center mb-4">მთავარი სიახლეები</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* სიახლე 1 */}
          <div className="bg-white shadow-md rounded-md overflow-hidden">
            <Image
              src="/images/news1.jpg"
              alt="News 1"
              width={500}
              height={300}
              className="w-full"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">სტატიის სათაური N1</h3>
              <p className="text-gray-600 text-sm">
                Lorem Ipsum is simply dummy text of the printing industry.
              </p>
              <Link href="#" className="text-blue-500 mt-4 inline-block font-semibold">
                დაწვრილებით →
              </Link>
            </div>
          </div>

          {/* სიახლე 2 */}
          <div className="bg-white shadow-md rounded-md overflow-hidden">
            <Image
              src="/images/news2.jpg"
              alt="News 2"
              width={500}
              height={300}
              className="w-full"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">სტატიის სათაური N2</h3>
              <p className="text-gray-600 text-sm">
                Lorem Ipsum is simply dummy text of the printing industry.
              </p>
              <Link href="#" className="text-blue-500 mt-4 inline-block font-semibold">
                დაწვრილებით →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default page
