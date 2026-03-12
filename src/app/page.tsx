import { getAllSculptures } from '@/lib/sculptures'
import { GalleryGrid } from '@/components/gallery/GalleryGrid'

export default function Home() {
  const sculptures = getAllSculptures()

  return (
    <section className="pt-10 pb-16 px-4 sm:px-6 lg:px-0 lg:max-w-[80%]">
      <GalleryGrid sculptures={sculptures} />
    </section>
  )
}
