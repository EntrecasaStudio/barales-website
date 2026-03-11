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
    description: sculpture.description,
  }
}

export default async function SculptureDetailPage({ params }: { params: Params }) {
  const { slug } = await params
  const sculpture = getSculptureBySlug(slug)
  if (!sculpture) notFound()

  const { prev, next } = getAdjacentSculptures(slug)
  const mainImage = sculpture.images[0]

  return (
    <div className="pt-4 pb-16">
      <div className="mx-auto max-w-5xl px-6">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs tracking-[0.15em] text-text-secondary hover:text-text-primary transition-colors mb-6 uppercase"
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Obras
        </Link>

        {/* Image / 3D viewer */}
        <div className="mb-8">
          {sculpture.model ? (
            <SculptureViewer
              modelUrl={sculpture.model.url}
              fallbackImage={mainImage.src}
            />
          ) : (
            <div className="relative aspect-[4/3] bg-neutral-50 overflow-hidden">
              <Image
                src={mainImage.src}
                alt={mainImage.alt}
                width={mainImage.width}
                height={mainImage.height}
                className="object-contain w-full h-full p-8"
                priority
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>
          )}
        </div>

        {/* Title and info */}
        <div className="max-w-xl">
          <h1 className="text-lg font-light text-text-primary">
            {sculpture.title}
          </h1>
          <p className="mt-2 text-sm text-text-secondary">
            {sculpture.materials.join(', ')} &middot; {sculpture.year}
          </p>
          <p className="mt-4 text-sm text-text-secondary leading-relaxed">
            {sculpture.description}
          </p>
        </div>

        {/* Navigation */}
        <nav className="mt-12 pt-6 border-t border-border flex items-center justify-between">
          {prev ? (
            <Link
              href={`/obras/${prev.slug}`}
              className="flex items-center gap-2 text-xs tracking-[0.1em] text-text-secondary hover:text-text-primary transition-colors uppercase"
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
              className="flex items-center gap-2 text-xs tracking-[0.1em] text-text-secondary hover:text-text-primary transition-colors uppercase"
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
    </div>
  )
}
