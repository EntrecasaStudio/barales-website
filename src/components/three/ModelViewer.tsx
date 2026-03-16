'use client'

import { Suspense, useRef, useCallback, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment, Center } from '@react-three/drei'
import * as THREE from 'three'

useGLTF.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.7/')

// Clipping plane: model centered by <Center> → Y from -0.699 to +0.699
// Only clip the rod tips at the very bottom (constant=0.67 → clips below y=-0.67)
const clipPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0.67)

type ViewAngle = 'front' | 'back' | 'quarter' | 'auto'

function Model({
  url,
  viewAngle,
  onLoaded,
}: {
  url: string
  viewAngle: ViewAngle
  onLoaded?: () => void
}) {
  const { scene } = useGLTF(url)
  const groupRef = useRef<THREE.Group>(null)
  const targetRotationY = useRef(Math.PI)
  const isAutoRotating = viewAngle === 'auto'
  const loadedRef = useRef(false)

  // Apply clipping planes to all materials
  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh && child.material) {
        const mat = child.material as THREE.Material
        mat.clippingPlanes = [clipPlane]
        mat.clipShadows = true
      }
    })
    if (!loadedRef.current) {
      loadedRef.current = true
      // Small delay so the still frame renders first
      setTimeout(() => onLoaded?.(), 100)
    }
  }, [scene, onLoaded])

  // Set target rotation based on view angle
  useEffect(() => {
    if (viewAngle === 'front') targetRotationY.current = Math.PI
    else if (viewAngle === 'back') targetRotationY.current = 0
    else if (viewAngle === 'quarter') targetRotationY.current = Math.PI * 0.75
  }, [viewAngle])

  useFrame((_, delta) => {
    if (!groupRef.current) return
    if (isAutoRotating) {
      groupRef.current.rotation.y += delta * 0.3
    } else {
      // Smooth lerp to target
      const current = groupRef.current.rotation.y
      const target = targetRotationY.current
      const diff = target - current
      const shortDiff = ((diff + Math.PI * 3) % (Math.PI * 2)) - Math.PI
      groupRef.current.rotation.y += shortDiff * 0.08
    }
  })

  return (
    <Center>
      <group ref={groupRef} rotation={[0, Math.PI, 0]}>
        <primitive object={scene} />
      </group>
    </Center>
  )
}

function CameraReset({ viewAngle }: { viewAngle: ViewAngle }) {
  const { camera } = useThree()
  const targetPos = useRef(new THREE.Vector3(0, 0.7, 2.2))

  useEffect(() => {
    targetPos.current.set(0, 0.7, 2.2)
  }, [viewAngle])

  useFrame(() => {
    camera.position.lerp(targetPos.current, 0.05)
  })

  return null
}

interface ModelViewerProps {
  modelUrl: string
  fallbackImage?: string
  autoRotate?: boolean
  className?: string
  onLoaded?: () => void
}

export function ModelViewer({ modelUrl, autoRotate = true, className = '', onLoaded }: ModelViewerProps) {
  // Start as 'front' (still), switch to 'auto' once loaded
  const [viewAngle, setViewAngle] = useState<ViewAngle>('front')
  const [loaded, setLoaded] = useState(false)

  const handleModelLoaded = useCallback(() => {
    setLoaded(true)
    if (autoRotate) {
      // Start rotating after a brief still moment
      setTimeout(() => setViewAngle('auto'), 600)
    }
    onLoaded?.()
  }, [autoRotate, onLoaded])

  const handleView = useCallback((view: ViewAngle) => {
    setViewAngle(view)
  }, [])

  return (
    <div className={`relative w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0.7, 2.2], fov: 40 }}
        gl={{ antialias: true, alpha: true, localClippingEnabled: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={0.8} />
          <directionalLight position={[-3, 3, -3]} intensity={0.3} />
          <Model url={modelUrl} viewAngle={viewAngle} onLoaded={handleModelLoaded} />
          <Environment preset="studio" environmentIntensity={0.4} />
          <CameraReset viewAngle={viewAngle} />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 1.8}
          />
        </Suspense>
      </Canvas>

      {/* View buttons */}
      {loaded && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 page-fade-in">
          {[
            { key: 'auto', label: 'Auto' },
            { key: 'front', label: 'Frontal' },
            { key: 'back', label: 'Trasera' },
            { key: 'quarter', label: '¾' },
          ].map((btn) => (
            <button
              key={btn.key}
              onClick={() => handleView(btn.key as ViewAngle)}
              className={`px-3 py-1.5 text-[11px] tracking-[0.08em] uppercase transition-all ${
                viewAngle === btn.key
                  ? 'bg-[#222] text-white'
                  : 'bg-white/80 text-[#666] hover:bg-white hover:text-[#222]'
              }`}
              style={{ backdropFilter: 'blur(8px)' }}
            >
              {btn.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
