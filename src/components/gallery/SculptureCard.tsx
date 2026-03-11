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
      <div className="relative aspect-square overflow-hidden bg-neutral-50">
        <Image
          src={img.src}
          alt={img.alt}
          width={img.width}
          height={img.height}
          className="object-contain w-full h-full transition-transform duration-700 group-hover:scale-105 p-6"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="py-3 text-center">
        <h3 className="text-sm tracking-[0.15em] text-text-primary group-hover:text-text-secondary transition-colors">
          {sculpture.title}
        </h3>
      </div>
    </Link>
  )
}
