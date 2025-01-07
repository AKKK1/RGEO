'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'

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
    <header
      className=" fixed top-0 left-0 right-0 bg-[#182385] z-20 shadow-md"
      {...(theme ? { 'data-theme': theme } : {})}
    >
      <div className="flex items-center justify-between py-4 px-3 max-w-7xl mx-auto text-lg">
        <Link className="px-5" href="/">
          <Logo loading="eager" priority="high" className="invert dark:invert-0" />
        </Link>
        <h1 className="lg:hidden   text-2xl bg-black/5 rounded-[6px] sm:text-1xl  flex items-center justify-center text-center">
          დიდება თავისუფლებას!
        </h1>
        <HeaderNav data={data} />
      </div>
    </header>
  )
}
