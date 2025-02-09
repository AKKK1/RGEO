'use client'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useState, useEffect } from 'react'
import { useDebounce } from '@/utilities/useDebounce'
import { useRouter } from 'next/navigation'

export const Search: React.FC = () => {
  const [value, setValue] = useState('')
  const router = useRouter()

  const debouncedValue = useDebounce(value)

  useEffect(() => {
    router.push(`/search${debouncedValue ? `?q=${debouncedValue}` : ''}`)
  }, [debouncedValue, router])

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <Label htmlFor="search" className="sr-only text-white">
          ძიება
        </Label>
        <Input
          className="text-white"
          id="search"
          onChange={(event) => {
            setValue(event.target.value)
          }}
          placeholder="ძიება..."
        />
        <button type="submit" className="sr-only">
          submit
        </button>
      </form>
    </div>
  )
}
