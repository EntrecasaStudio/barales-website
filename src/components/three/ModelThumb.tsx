'use client'

import { Suspense, useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Center } from '@react-three/drei'
import * as THREE from 'three'

useGLTF.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.7/')

const clipPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0.67)

function SpinningModel({ url }: { url: string }) {
  const { scene } = useGLTF(url)
  const groupRef = useRef<THREE.Group>(null)

  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh && child.material) {
        const mat = child.material as THREE.Material
        mat.clippingPlanes = [clipPlane]
        mat.clipShadows = true
      }
    })
  }, [scene])

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.4
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

export function ModelThumb({ url }: { url: string }) {
  return (
    <Canvas
      camera={{ position: [0, 0.7, 2.2], fov: 40 }}
      gl={{ antialias: true, alpha: true, localClippingEnabled: true }}
      style={{ background: 'transparent' }}
      dpr={[1, 1.5]}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <directionalLight position={[-3, 3, -3]} intensity={0.3} />
        <SpinningModel url={url} />
      </Suspense>
    </Canvas>
  )
}
