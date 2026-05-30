import { Canvas, useFrame } from '@react-three/fiber'
import { Text3D, Center, Environment, Float } from '@react-three/drei'
import { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'
import { 
  EffectComposer, 
  Bloom, 
  Vignette,
  ChromaticAberration
} from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import { Vector2 } from 'three'

function HeroText() {
  const groupRef = useRef<THREE.Group>(null)
  const [progress, setProgress] = useState(0)
  const startTime = useRef<number | null>(null)

  useFrame((state) => {
    if (!groupRef.current) return

    // Entrance animation
    if (progress < 1) {
      if (startTime.current === null) {
        startTime.current = state.clock.elapsedTime
      }
      const elapsed = state.clock.elapsedTime - startTime.current
      const duration = 1.8
      const raw = Math.min(elapsed / duration, 1)
      // Sharp ease out quart
      const eased = 1 - Math.pow(1 - raw, 4)
      setProgress(eased)

      groupRef.current.scale.setScalar(0.5 + eased * 0.5)
      groupRef.current.position.z = -3 + eased * 3
    } else {
      // Idle float after entrance
      groupRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.3) * 0.08
      groupRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.03
    }
  })

  return (
    <group ref={groupRef} scale={[0.6, 0.6, 0.6]} position={[0, 0, -3]}>
      <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
        <Center>
          <Text3D
            font="/fonts/helvetiker_regular.typeface.json"
            size={0.52}
            height={0.12}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.01}
            bevelSize={0.01}
            bevelSegments={5}
          >
            MEHMET EMIR BIYIK
            <meshPhysicalMaterial
              color="#e8e4dc"
              metalness={0.9}
              roughness={0.05}
              reflectivity={1}
              clearcoat={1}
              clearcoatRoughness={0.1}
            />
          </Text3D>
        </Center>
      </Float>
    </group>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 45 }}
      dpr={[1, 1.5]}
      performance={{ min: 0.5 }}
      gl={{ 
        antialias: false,
        powerPreference: 'high-performance'
      }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    >
      <ambientLight intensity={0.2} />
      <directionalLight
        position={[0, 5, 5]}
        intensity={1.5}
        color="#f0ede6"
      />
      <pointLight
        position={[-4, 2, 3]}
        intensity={2}
        color="#2d6a4f"
      />
      <pointLight
        position={[4, -2, 3]}
        intensity={1.5}
        color="#c9a84c"
      />
      <pointLight
        position={[0, -4, 2]}
        intensity={0.8}
        color="#1a3a2a"
      />
      <Environment preset="city" />
      <HeroText />
      <EffectComposer multisampling={0}>
        <Bloom
          intensity={0.3}
          luminanceThreshold={0.8}
          luminanceSmoothing={0.95}
          mipmapBlur
          levels={3}
        />
        <Vignette
          offset={0.4}
          darkness={0.6}
          blendFunction={BlendFunction.NORMAL}
        />
      </EffectComposer>
    </Canvas>
  )
}
