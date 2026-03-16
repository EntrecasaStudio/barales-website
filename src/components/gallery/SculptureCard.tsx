'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef, useCallback } from 'react'
import dynamic from 'next/dynamic'
import { Sculpture } from '@/lib/types'

const ModelThumb = dynamic(
  () => import('@/components/three/ModelThumb').then((m) => m.ModelThumb),
  { ssr: false }
)

export function SculptureCard({ sculpture }: { sculpture: Sculpture }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const hasMultiple = sculpture.images.length > 1

  const startCycling = useCallback(() => {
    if (!hasMultiple) return
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sculpture.images.length)
    }, 1200)
  }, [hasMultiple, sculpture.images.length])

  const stopCycling = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setCurrentIndex(0)
  }, [])

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <Link
      href={`/obras/${sculpture.slug}`}
      className="group block"
      onMouseEnter={startCycling}
      onMouseLeave={stopCycling}
    >
      <div className="relative aspect-square overflow-hidden">
        {sculpture.model ? (
          <ModelThumb url={sculpture.model.url} />
        ) : (
          sculpture.images.map((image, i) => (
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className={`object-cover w-full h-full transition-opacity duration-500 absolute inset-0 ${
                i === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              {...(i === 0 ? {} : { loading: 'lazy' })}
            />
          ))
        )}
      </div>
    </Link>
  )
}
