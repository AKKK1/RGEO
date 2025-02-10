'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'

import { cn } from '../../../utilities/cn'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Input } from '@/components/ui/input'

export default function SearchFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [date, setDate] = useState<Date | undefined>()
  const [dateString, setDateString] = useState('')

  useEffect(() => {
    const queryDate = searchParams.get('q')
    if (queryDate) {
      setDateString(queryDate)
      const [day, month, year] = queryDate.split('.')
      if (day && month && year) {
        setDate(new Date(parseInt(year), parseInt(month) - 1, parseInt(day)))
      }
    }
  }, [searchParams])

  const handleDateChange = (selectedDate: Date | undefined) => {
    setDate(selectedDate)
    if (selectedDate) {
      const formattedDate = format(selectedDate, 'dd.MM.yyyy')
      setDateString(formattedDate)
      updateSearch(formattedDate)
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value
    setDateString(inputValue)
    if (inputValue.length === 10 && inputValue.match(/^\d{2}\.\d{2}\.\d{4}$/)) {
      updateSearch(inputValue)
    }
  }

  const updateSearch = (dateValue: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('q', dateValue)
    router.push(`/search?${params.toString()}`)
  }

  const handleClear = () => {
    setDate(undefined)
    setDateString('')
    const params = new URLSearchParams(searchParams.toString())
    params.delete('q')
    router.push(`/search?${params.toString()}`)
  }

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex space-x-2">
        <Input
          type="text"
          placeholder="თარიღი (მაგ: 10.02.2025)"
          value={dateString}
          onChange={handleInputChange}
        />
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-10 p-0">
              <CalendarIcon className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="end">
            <Calendar mode="single" selected={date} onSelect={handleDateChange} initialFocus />
          </PopoverContent>
        </Popover>
      </div>
      <Button onClick={handleClear} variant="destructive">
        გასუფთავება
      </Button>
    </div>
  )
}
