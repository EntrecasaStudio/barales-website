'use client'

import dynamic from 'next/dynamic'

const ModelViewer = dynamic(
  () => import('@/components/three/ModelViewer').then((m) => m.ModelViewer),
  { ssr: false }
)

export function SculptureViewer({ modelUrl }: { modelUrl: string }) {
  return (
    <div className="w-full bg-[#f5f5f5] page-fade-in" style={{ height: '65vh', animationDelay: '0.15s' }}>
      <ModelViewer modelUrl={modelUrl} autoRotate={true} />
    </div>
  )
}
