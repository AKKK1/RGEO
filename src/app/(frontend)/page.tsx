import PageTemplate, { generateMetadata } from './[slug]/page'

export default PageTemplate

export { generateMetadata }

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
import { PhoneCall, SearchCheck, SearchCheckIcon, SearchIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { GoCommit } from 'react-icons/go'
import { Search } from '@/search/Component'
import { MainSearch } from '@/search/MainSearch'

// const page = () => {
//   return (
//     <div className="w-full overflow-x-hidden">
//       {/* პირველი სექცია */}
//       {/* <section
//         className="pt-20  h-[582px] w-full  flex items-center justify-center flex-end px-6 shadow-md bg-cover bg-center "
//         style={{ backgroundImage: "url('/media/des.png')" }}
//       >
//         <h1> ყველანი შენს გვერდით</h1>
//       </section> */}
//       <header
//         className="relative w-full h-[582px] bg-cover bg-center"
//         style={{ backgroundImage: "url('/media/des.png')" }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white">
//           <h1 className="text-[80px] font-poppins font-medium leading-[120px] mb-4 decoration-from-font decoration-skip-ink-none">
//             ყველანი შენს გვერდით
//           </h1>
//           <div className="flex w-full max-w-sm items-center space-x-2 mt-38px">
//             <SearchCheckIcon
//               className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white"
//               size={20}
//             />
//             <MainSearch />
//             <Button type="submit" className="rounded-full bg-blue-400">
//               <GoCommit />
//             </Button>
//           </div>
//         </div>
//       </header>

//       {/* მეორე სექცია */}
//       <section className="relative w-full h-[387px] flex justify-center items-center bg-white overflow-hidden"></section>

//       {/* პოსტის ბლოკები */}
//       <section className="flex flex-wrap justify-center gap-4 p-4 md:p-8 bg-white shadow-md">
//         {/* თითოეული პოსტი */}
//         <div className="h-[350px] w-[600px] bg-gray-100 rounded-md shadow p-4">
//           <h3 className="text-lg font-semibold mb-2">პოსტი 1</h3>
//           <p className="text-sm text-gray-600">ტელეგრამ ლინკი</p>
//           <Link href="https://www.facebook.com/" rel="noopener noreferrer">
//             linki
//           </Link>
//         </div>
//         <div className="h-[350px] w-[600px] bg-gray-100 rounded-md shadow p-4">
//           <h3 className="text-lg font-semibold mb-2">პოსტი 2</h3>
//           <p className="text-sm text-gray-600">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac velit fermentum,
//             dignissim ligula vitae, pretium purus.
//           </p>
//           <Image src="/media/main.png" alt="rame" height={300} width={400} loading="lazy" />
//         </div>
//         <div className="h-[350px] w-[600px] bg-gray-100 rounded-md shadow p-4">
//           <h3 className="text-lg font-semibold mb-2">პოსტი 3</h3>
//           <p className="text-sm text-gray-600">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac velit fermentum,
//             dignissim ligula vitae, pretium purus.
//           </p>
//         </div>
//       </section>

//       {/* მესამე სექცია */}
//       <section
//         className="h-[910px] bg-[#ffffff] w-full flex items-center  justify-center px-4 bg-cover bg-center"
//         style={{
//           backgroundImage: "url('/media/omi.png')",
//         }}
//       >
//         <div className="flex justify-center align-center flex-row text-center gap-30">
//           {/* სლაიდერი */}

//           <div className="w-full max-w-7xl">
//             {/* აქ მოათავსე შენი სლაიდერი */}
//             <Caru />
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default page
