import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, Html } from '@react-three/drei'
import { useRef, useState } from 'react'

const items = [
  { name: 'ReactJS', position: [2, 2, 0], url: '#react' },
  { name: 'Laravel', position: [-3, 1, 1], url: '#laravel' },
  { name: 'Python', position: [1, -2, -2], url: '#python' },
  { name: 'MongoDB', position: [-2, -1, 2], url: '#mongo' },
  // Add more skills/projects here
]

function Star({ item }) {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  return (
    <mesh
      ref={meshRef}
      position={item.position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => window.open(item.url, '_blank')}
    >
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshStandardMaterial color={hovered ? 'aqua' : 'white'} />
      {hovered && (
        <Html distanceFactor={10}>
          <div className="text-green-400 bg-black px-2 py-1 rounded shadow-md text-xs font-mono">{item.name}</div>
        </Html>
      )}
    </mesh>
  )
}

export default function Galaxy() {
  return (
    <div className="h-screen w-full bg-black">
      <Canvas camera={{ position: [0, 0, 6], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
        <OrbitControls />
        {items.map((item, index) => (
          <Star key={index} item={item} />
        ))}
      </Canvas>
    </div>
  )
}
