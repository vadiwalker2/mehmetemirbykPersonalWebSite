import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef, useMemo, useEffect } from 'react'
import * as THREE from 'three'

function ParticleField() {
  const meshRef = useRef<THREE.Points>(null)
  const scrollY = useRef(0)
  const scrollVelocity = useRef(0)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      scrollVelocity.current = 
        window.scrollY - lastScrollY.current
      lastScrollY.current = window.scrollY
      scrollY.current = window.scrollY
    }
    window.addEventListener('scroll', handleScroll, 
      { passive: true })
    return () => 
      window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const particles = useMemo(() => {
    const count = 120
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8
    }
    return positions
  }, [])

  useFrame((state) => {
    if (!meshRef.current) return

    const scrollProgress = scrollY.current /
      (document.body.scrollHeight - window.innerHeight)

    // Velocity fades out over time
    scrollVelocity.current *= 0.75

    const velocityInfluence = 
      Math.abs(scrollVelocity.current) * 0.001

    // Base rotation + velocity boost
    meshRef.current.rotation.y +=
      0.00015 + velocityInfluence * 0.08
    meshRef.current.rotation.x +=
      0.00008 + velocityInfluence * 0.04

    // Scroll parallax drift
    meshRef.current.position.y = scrollProgress * 6

    // Particle size pulses with velocity
    const mat = meshRef.current.material as 
      THREE.PointsMaterial
    if (mat) {
      mat.size = 0.025 + velocityInfluence * 0.04
      mat.opacity = 0.6 + velocityInfluence * 0.3
    }
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#2d6a4f"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

function FloatingOrbs() {
  const scrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const orbs = useMemo(() => 
    Array.from({ length: 4 }, (_, i) => ({
      id: i,
      position: [
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 12,
        -3 - Math.random() * 3
      ] as [number, number, number],
      speed: 0.2 + Math.random() * 0.3,
      radius: 0.08 + Math.random() * 0.12,
    })), []
  )

  return (
    <>
      {orbs.map((orb) => (
        <OrbMesh key={orb.id} {...orb} scrollY={scrollY} />
      ))}
    </>
  )
}

function OrbMesh({ position, speed, radius, scrollY }: { 
  position: [number, number, number]
  speed: number
  radius: number 
  scrollY: React.MutableRefObject<number>
}) {
  const ref = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (!ref.current) return
    const scrollProgress = scrollY.current / 
      (document.body.scrollHeight - window.innerHeight)
      
    ref.current.position.y = position[1] + 
      Math.sin(state.clock.elapsedTime * speed) * 0.8 -
      scrollProgress * 4
    ref.current.position.x = position[0] + 
      Math.cos(state.clock.elapsedTime * speed * 0.7) * 0.4
  })

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[radius, 8, 8]} />
      <meshStandardMaterial
        color="#1a3a2a"
        emissive="#2d6a4f"
        emissiveIntensity={0.4}
        transparent
        opacity={0.5}
      />
    </mesh>
  )
}

export default function BackgroundScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      dpr={[1, 1.2]}
      gl={{ 
        antialias: false,
        powerPreference: 'high-performance',
        alpha: true
      }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      <ambientLight intensity={0.5} />
      <pointLight 
        position={[5, 5, 3]} 
        intensity={0.8} 
        color="#2d6a4f" 
      />
      <ParticleField />
      <FloatingOrbs />
    </Canvas>
  )
}
