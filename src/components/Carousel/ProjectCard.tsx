import React from 'react'
import Image from 'next/image'

interface Props {
  src: string
  title: string
  description: string
  ae: string
  className?: string
}

const ProjectCard: React.FC<Props> = ({ src, title, description, ae }) => {
  return (
    <Image src={src} alt={title} width={1200} height={1200} className="w-full object-contain" />
  )
}

export default ProjectCard
