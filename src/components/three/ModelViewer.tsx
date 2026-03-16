'use client'

import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment, Center } from '@react-three/drei'
import * as THREE from 'three'

// Enable Draco decoder
useGLTF.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.7/')

function RotatingModel({ url, autoRotate = true }: { url: string; autoRotate?: boolean }) {
  const { scene } = useGLTF(url)
  const groupRef = useRef<THREE.Group>(null)

  useFrame((_, delta) => {
    if (autoRotate && groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3
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

interface ModelViewerProps {
  modelUrl: string
  fallbackImage?: string
  autoRotate?: boolean
  className?: string
}

export function ModelViewer({ modelUrl, autoRotate = true, className = '' }: ModelViewerProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0.7, 2.2], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={0.8} />
          <directionalLight position={[-3, 3, -3]} intensity={0.3} />
          <RotatingModel url={modelUrl} autoRotate={autoRotate} />
          <Environment preset="studio" environmentIntensity={0.4} />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 1.8}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
