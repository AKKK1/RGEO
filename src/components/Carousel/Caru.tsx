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
import CaruCard from './ProjectCard'
import ProjectCard from './ProjectCard'

export const CaruContent = [
  {
    src: '/media/bane.png',
    title: 'Starbucksreserve',
    description: 'NextJS, GSAP, ThreeJS, Tailwind',
    ae: 'https://www.starbucksreserve.com/',
  },
  {
    src: '/media/bane.png',
    title: 'Frog',
    description: 'React, Graphql, LS, Tailwind',
    ae: 'https://www.frog.co/',
  },
  {
    src: '/media/bane.png',
    title: 'Artsmia',
    description: 'React.js, Next.js, Tailwind ',
    ae: 'https://new.artsmia.org/',
  },
  {
    src: '/media/bane.png',
    title: 'askona',
    description: 'React.js, Mern ',
    ae: 'https://www.askona.ru/',
  },
  {
    src: '/media/bane.png',
    title: 'sigmapool',
    description: 'React.js,MERN ',
    ae: 'https://sigmapool.com/',
  },
  {
    src: '/media/bane.png',
    title: 'alephzero',
    description: 'React.js, Next.js Threejs ',
    ae: 'https://alephzero.org/',
  },
]

const Caru = () => {
  return (
    <Carousel className="relative w-full max-w-[1200px] h-[600px]  items-center ">
      <CarouselContent className="gap-2 max-w-[1100px] h-[600px] rounded-[53px]">
        {CaruContent.map((proj, index) => (
          <CarouselItem key={index} className="border rounded-[53px]">
            <div className="p-1 rounded-full">
              <Card className="rounded-[53px] bg-white">
                <CardContent className="flex h-[610px] items-center justify-center p-6 rounded-[53px]">
                  {/* <ProjectCard
                    title={proj.title}
                    description={proj.description}
                    src={proj.src}
                    ae={proj.ae}
                    className=""
                  /> */}
                  <div className="z-40 gap-9 flex flex-col p-3">
                    <Image src={proj.src} alt={proj.title} width={800} height={400} />
                    <h1 className="text-5xl font-semibold z-30">{proj.title}</h1>
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
  )
}

export default Caru
