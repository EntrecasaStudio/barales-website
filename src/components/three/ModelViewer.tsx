'use client'

import { Suspense, useState, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment, useProgress, Center } from '@react-three/drei'
import type { Group } from 'three'

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url)
  const ref = useRef<Group>(null)

  return (
    <Center>
      <primitive ref={ref} object={scene} />
    </Center>
  )
}

function LoadingOverlay() {
  const { progress } = useProgress()
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-bg-secondary z-10">
      <div className="w-32 h-0.5 bg-border rounded-full overflow-hidden">
        <div
          className="h-full bg-accent transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-3 text-xs text-text-muted tracking-wider">
        {Math.round(progress)}%
      </p>
    </div>
  )
}

export function ModelViewer({ modelUrl, fallbackImage }: { modelUrl: string; fallbackImage?: string }) {
  const [show3D, setShow3D] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)

  if (!show3D) {
    return (
      <div className="relative aspect-square bg-bg-secondary flex items-center justify-center">
        {fallbackImage && (
          <img src={fallbackImage} alt="" className="absolute inset-0 w-full h-full object-contain p-4" />
        )}
        <button
          onClick={() => setShow3D(true)}
          className="relative z-10 flex items-center gap-2 px-5 py-2.5 bg-bg-primary/80 backdrop-blur-sm border border-border rounded-full text-sm text-text-primary hover:text-accent hover:border-accent transition-all"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
          </svg>
          Ver en 3D
        </button>
      </div>
    )
  }

  const viewerContent = (
    <div className={`relative ${isFullscreen ? 'fixed inset-0 z-50 bg-bg-primary' : 'aspect-square'}`}>
      <Suspense fallback={<LoadingOverlay />}>
        <Canvas
          camera={{ position: [0, 0, 3], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 2]}
          className="bg-bg-secondary"
        >
          <Environment preset="studio" />
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 5, 5]} intensity={0.5} />
          <Model url={modelUrl} />
          <OrbitControls
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            minDistance={1.5}
            maxDistance={5}
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI - Math.PI / 6}
          />
        </Canvas>
      </Suspense>

      {/* Controls overlay */}
      <div className="absolute bottom-4 right-4 flex gap-2">
        <button
          onClick={() => setIsFullscreen(!isFullscreen)}
          className="p-2 bg-bg-primary/60 backdrop-blur-sm border border-border rounded-lg text-text-secondary hover:text-text-primary transition-colors"
          aria-label={isFullscreen ? 'Salir de pantalla completa' : 'Pantalla completa'}
        >
          {isFullscreen ? (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
            </svg>
          )}
        </button>
      </div>

      {/* Hint */}
      <p className="absolute bottom-4 left-4 text-xs text-text-muted">
        Arrastrá para rotar
      </p>
    </div>
  )

  return viewerContent
}
