import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getAllSculptures, getSculptureBySlug, getAdjacentSculptures } from '@/lib/sculptures'
import { SculptureViewer } from '@/components/sculpture/SculptureViewer'

type Params = Promise<{ slug: string }>

export async function generateStaticParams() {
  return getAllSculptures().map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params
  const sculpture = getSculptureBySlug(slug)
  if (!sculpture) return {}
  return {
    title: sculpture.title,
    description: `${sculpture.title} — ${sculpture.year}${sculpture.materials.length ? ` — ${sculpture.materials.join(', ')}` : ''}`,
  }
}

function buildCaption(sculpture: { title: string; year: number; dimensions?: string; materials: string[] }) {
  const parts = [sculpture.title, String(sculpture.year)]
  if (sculpture.dimensions) parts.push(sculpture.dimensions)
  if (sculpture.materials.length) parts.push(sculpture.materials.join(', '))
  return parts.join(' — ')
}

export default async function SculptureDetailPage({ params }: { params: Params }) {
  const { slug } = await params
  const sculpture = getSculptureBySlug(slug)
  if (!sculpture) notFound()

  const { prev, next } = getAdjacentSculptures(slug)
  const mainImage = sculpture.images[0]

  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)] lg:min-h-screen">
      <div className="flex-1 flex flex-col px-4 sm:px-6 lg:px-0 lg:max-w-[85%] pt-4 lg:pt-2">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs tracking-[0.15em] text-[#999] hover:text-[#222] transition-colors mb-4 uppercase page-fade-in"
          style={{ animationDelay: '0.1s' }}
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Obras
        </Link>

        {/* Images / 3D viewer */}
        <div className="mb-4 flex-1 min-h-0 flex flex-col gap-4">
          {sculpture.model ? (
            <SculptureViewer
              modelUrl={sculpture.model.url}
              fallbackImage={mainImage.src}
            />
          ) : (
            sculpture.images.map((image, i) => (
              <div key={image.src} className={`relative w-full overflow-hidden bg-[#f5f5f5] page-fade-in ${i === 0 ? 'max-h-[65vh] aspect-[4/3]' : 'max-h-[65vh] aspect-[4/3]'}`} style={{ animationDelay: `${0.15 + i * 0.1}s` }}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="object-contain w-full h-full"
                  priority={i === 0}
                  sizes="(max-width: 1024px) 100vw, 800px"
                />
              </div>
            ))
          )}
        </div>

        {/* Caption: Title — Year — Dimensions — Material */}
        <p className="text-sm font-display text-[#222] page-fade-in" style={{ animationDelay: '0.3s' }}>
          {buildCaption(sculpture)}
        </p>
      </div>

      {/* Navigation */}
      <nav className="px-4 sm:px-6 lg:px-0 lg:max-w-[85%] py-6 mt-4 border-t border-[#e5e5e5] flex items-center justify-between page-fade-in" style={{ animationDelay: '0.4s' }}>
        {prev ? (
          <Link
            href={`/obras/${prev.slug}`}
            className="flex items-center gap-2 text-xs tracking-[0.1em] text-[#999] hover:text-[#222] transition-colors uppercase"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            {prev.title}
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/obras/${next.slug}`}
            className="flex items-center gap-2 text-xs tracking-[0.1em] text-[#999] hover:text-[#222] transition-colors uppercase"
          >
            {next.title}
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </div>
  )
}
