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
    title: '3 ნოემბერი',
    description: 'რუსთაველზე თავშეყრა, 200 000 ადამიანი',
    ae: 'https://www.starbucksreserve.com/',
  },
  {
    src: '/media/bane.png',
    title: '3 ნოემბერი',
    description: 'რუსთაველზე თავშეყრა, 200 000 ადამიანი',
    ae: 'https://www.frog.co/',
  },
  {
    src: '/media/bane.png',
    title: '3 ნოემბერი',
    description: 'რუსთაველზე თავშეყრა, 200 000 ადამიანი',
    ae: 'https://new.artsmia.org/',
  },
  {
    src: '/media/bane.png',
    title: '3 ნოემბერი',
    description: 'რუსთაველზე თავშეყრა, 200 000 ადამიანი',
    ae: 'https://www.askona.ru/',
  },
  {
    src: '/media/bane.png',
    title: '3 ნოემბერი',
    description: 'რუსთაველზე თავშეყრა, 200 000 ადამიანი',
    ae: 'https://sigmapool.com/',
  },
  {
    src: '/media/main.png',
    title: '3 ნოემბერი',
    description: 'რუსთაველზე თავშეყრა, 200 000 ადამიანი',
    ae: 'https://alephzero.org/',
  },
]

const Caru = () => {
  return (
    <Carousel className="relative w-full max-w-[1200px] h-[600px]  items-center ">
      <CarouselContent className="gap-2 max-w-[1100px] h-[600px] rounded-[35px]">
        {CaruContent.map((proj, index) => (
          <CarouselItem key={index} className=" rounded-[35px]">
            <div className="p-1 rounded-full">
              {/* <Card className="rounded-[35px] bg-[#cbcbcb]"> */}
              {/* <CardContent className="  flex h-[610px] items-center justify-center text-center p-6 rounded-[px]"> */}
              {/* <ProjectCard
                    title={proj.title}
                    description={proj.description}
                    src={proj.src}
                    ae={proj.ae}
                    className=""
                  /> */}
              <div className="z-40 gap-9 flex flex-col p-3 flex justify-center items-center">
                <Image src={proj.src} alt={proj.title} width={800} height={400} />
                <h1 className="text-5xl text-black font-semibold z-30">{proj.title}</h1>
                <p className="text-2xl text-black"> {proj.description}</p>
              </div>
              {/* </CardContent> */}
              {/* </Card> */}
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
