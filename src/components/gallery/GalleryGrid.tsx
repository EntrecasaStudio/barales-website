import { Sculpture } from '@/lib/types'
import { SculptureCard } from './SculptureCard'

export function GalleryGrid({ sculptures }: { sculptures: Sculpture[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[clamp(16px,8vw,64px)] gap-y-0">
      {sculptures.map((sculpture) => (
        <SculptureCard key={sculpture.slug} sculpture={sculpture} />
      ))}
    </div>
  )
}
