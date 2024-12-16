'use client'

import { cn } from 'src/utilities/cn'
import React, { useEffect, useRef } from 'react'

import type { Props as MediaProps } from '../types'

import { getClientSideURL } from '@/utilities/getURL'

export const VideoMedia: React.FC<MediaProps> = (props) => {
  const { onClick, resource, videoClassName } = props

  const videoRef = useRef<HTMLVideoElement>(null)
  // const [showFallback] = useState<boolean>()

  useEffect(() => {
    const { current: video } = videoRef
    if (video) {
      video.addEventListener('suspend', () => {
        // setShowFallback(true);
        // console.warn('Video was suspended, rendering fallback image.')
      })
    }
  }, [])

  if (resource && typeof resource === 'object') {
    const { filename } = resource

    return (
      <video
        autoPlay={true}
        className={cn(videoClassName)}
        controls={true}
        loop
        onClick={onClick}
        playsInline
        ref={videoRef}
      >
        <source src={`${getClientSideURL()}/media/${filename}`} />
      </video>
    )
  }

  return null
}
