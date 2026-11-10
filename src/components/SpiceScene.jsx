import { Canvas } from '@react-three/fiber'
import { Float, Environment, ContactShadows } from '@react-three/drei'

function SpiceOrb({ position, color, scale, speed }) {
  return (
    <Float speed={speed} rotationIntensity={1.1} floatIntensity={1.4}>
      <mesh position={position} scale={scale} castShadow>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial color={color} roughness={0.28} metalness={0.12} />
      </mesh>
    </Float>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={1.3} />
      <directionalLight position={[4, 5, 4]} intensity={2.2} castShadow />
      <SpiceOrb position={[-1.05, 0.55, 0]} color="#F59E0B" scale={0.72} speed={1.2} />
      <SpiceOrb position={[0.95, 0.15, 0.2]} color="#9F2D24" scale={0.92} speed={1.6} />
      <SpiceOrb position={[0.05, -0.95, -0.2]} color="#D97706" scale={0.42} speed={1.8} />
      <SpiceOrb position={[1.2, 1.25, -0.7]} color="#FCD34D" scale={0.25} speed={1.1} />
      <ContactShadows position={[0, -1.8, 0]} opacity={0.3} scale={5} blur={2.5} />
      <Environment preset="city" />
    </>
  )
}

export default function SpiceScene() {
  return (
    <div className="hero-3d" aria-label="Floating spice-inspired 3D spheres">
      <Canvas camera={{ position: [0, 0, 5], fov: 42 }} dpr={[1, 1.5]}>
        <Scene />
      </Canvas>
    </div>
  )
}
