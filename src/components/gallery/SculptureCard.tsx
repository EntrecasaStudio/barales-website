import Image from 'next/image'
import Link from 'next/link'
import { Sculpture } from '@/lib/types'

export function SculptureCard({ sculpture }: { sculpture: Sculpture }) {
  const img = sculpture.images[0]

  return (
    <Link
      href={`/obras/${sculpture.slug}`}
      className="group block"
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={img.src}
          alt={img.alt}
          width={img.width}
          height={img.height}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
    </Link>
  )
}
