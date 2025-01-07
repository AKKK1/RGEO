'use client'

import React, { useEffect } from 'react'
import type { Header as HeaderType } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { Menu, SearchIcon, X } from 'lucide-react'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDropdown = () => setIsOpen(!isOpen)

  const closeDropdown = () => setIsOpen(false)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdown = document.getElementById('dropdown-menu')
      const button = document.getElementById('menu-button')
      if (
        dropdown &&
        button &&
        !dropdown.contains(event.target as Node) &&
        !button.contains(event.target as Node)
      ) {
        closeDropdown()
      }
    }

    if (isOpen) {
      document.addEventListener('click', handleClickOutside)
    } else {
      document.removeEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isOpen])

  return (
    <nav className="flex gap-6 justify-center items-center overflow-x-hidden">
      <div className={`hidden lg:flex ${isOpen ? 'block' : 'hidden'}  relative`}>
        <div className="flex gap-6 justify-center items-center">
          {navItems.map(({ link }, i) => {
            return <CMSLink key={i} {...link} appearance="link" />
          })}
          <Link href="/search">
            <span className="sr-only">Search</span>
            <SearchIcon className="w-5 text-primary" />
          </Link>
        </div>
      </div>
      <div className="lg:hidden flex flex-row">
        <button
          id="menu-button"
          onClick={toggleDropdown}
          className="dropdown dropdown-bottom dropdown-end flex flex-row"
        >
          {isOpen ? <X className="z-10" /> : <Menu />}
        </button>
        {isOpen && (
          <div
            id="dropdown-menu"
            className="absolute right-0 mt-9 w-48 p-5 bg-[#182385] rounded-md shadow-lg flex flex-col gap-4 sm:rounded-[6px]"
          >
            {navItems.map(({ link }, i) => {
              return <CMSLink key={i} {...link} appearance="link" />
            })}
            <Link href="/search">
              <span className="sr-only">Search</span>
              <SearchIcon className="w-5 text-primary" />
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
