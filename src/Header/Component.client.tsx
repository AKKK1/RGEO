'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'
import Image from 'next/image'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    <header className=" fixed top-0 left-0 right-0  z-20 bg-black text-white">
      <div className="flex items-center justify-between py-4 px-3 max-w-7xl mx-auto text-lg text-white">
        <Link className="px-5" href="/">
          <Logo loading="eager" priority="high" className="invert dark:invert-0" />
        </Link>
        <div className="flex-grow flex justify-center">
          <HeaderNav data={data} />
        </div>
        <div
          className="flex items-center justify-center gap-3 animate-bounce animate-infinite 
"
        >
          <Link href="https://t.me/+iF8aQyyaNvM1YTNi" rel="noopener noreferrer " target="_blank">
            <p>მოგვწერეთ აქ </p>
          </Link>

          <Link
            href="https://t.me/+iF8aQyyaNvM1YTNi"
            rel="noopener noreferrer"
            target="_blank"
            className="border border-blue-600 rounded-full px-5 py-1.5"
          >
            <Image src="/media/telegram.png" alt="rame" height={20} width={20} loading="lazy" />{' '}
          </Link>
        </div>
      </div>
    </header>
  )
}
