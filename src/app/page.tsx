import { getAllSculptures } from '@/lib/sculptures'
import { GalleryGrid } from '@/components/gallery/GalleryGrid'

export default function Home() {
  const sculptures = getAllSculptures()

  return (
    <section className="pt-4 pb-16 px-4 md:px-6">
      <div className="mx-auto max-w-7xl">
        <GalleryGrid sculptures={sculptures} />
      </div>
    </section>
  )
}
