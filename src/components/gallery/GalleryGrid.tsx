'use client'

import { useRef, useEffect, useState } from 'react'
import { Sculpture } from '@/lib/types'
import { SculptureCard } from './SculptureCard'

export function GalleryGrid({ sculptures }: { sculptures: Sculpture[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.05 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[clamp(16px,8vw,64px)] gap-y-0"
    >
      {sculptures.map((sculpture, i) => (
        <div
          key={sculpture.slug}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
            transition: `opacity 0.8s ease-out ${i * 0.06}s, transform 0.8s ease-out ${i * 0.06}s`,
          }}
        >
          <SculptureCard sculpture={sculpture} />
        </div>
      ))}
    </div>
  )
}
