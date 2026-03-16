'use client'

import { useState } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const ModelViewer = dynamic(
  () => import('@/components/three/ModelViewer').then((m) => m.ModelViewer),
  { ssr: false }
)

export function SculptureViewer({ modelUrl, fallbackImage }: { modelUrl: string; fallbackImage?: string }) {
  const [modelReady, setModelReady] = useState(false)

  return (
    <div className="relative w-full bg-[#f5f5f5] page-fade-in" style={{ height: '65vh', animationDelay: '0.15s' }}>
      {/* Fallback static image shown while 3D loads */}
      {fallbackImage && (
        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${modelReady ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <Image
            src={fallbackImage}
            alt="Cargando modelo 3D..."
            width={600}
            height={600}
            className="object-contain max-h-full"
            priority
          />
        </div>
      )}

      {/* 3D Viewer on top */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${modelReady ? 'opacity-100' : 'opacity-0'}`}>
        <ModelViewer
          modelUrl={modelUrl}
          fallbackImage={fallbackImage}
          autoRotate={true}
          onLoaded={() => setModelReady(true)}
        />
      </div>
    </div>
  )
}
