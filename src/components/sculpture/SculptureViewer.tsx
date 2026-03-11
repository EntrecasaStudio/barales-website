'use client'

import dynamic from 'next/dynamic'

const ModelViewer = dynamic(
  () => import('@/components/three/ModelViewer').then((m) => m.ModelViewer),
  { ssr: false }
)

export function SculptureViewer({ modelUrl, fallbackImage }: { modelUrl: string; fallbackImage?: string }) {
  return <ModelViewer modelUrl={modelUrl} fallbackImage={fallbackImage} />
}
