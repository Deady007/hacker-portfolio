import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import { TextureLoader } from 'three';
import { useRef } from 'react';

// Add paths to your planet textures
const planetTextures = [
  '/textures/planets/8k_earth_daymap.jpg',
  '/textures/planets/8k_mars.jpg',
  '/textures/planets/8k_jupiter.jpg',
  '/textures/planets/8k_venus_surface.jpg',
  '/textures/planets/8k_saturn.jpg',
  '/textures/planets/8k_mercury.jpg',
  '/textures/planets/2k_neptune.jpg',
  '/textures/planets/2k_uranus.jpg',
  '/textures/planets/4k_makemake_fictional.jpg',
  '/textures/planets/8k_moon.jpg',
  '/textures/planets/8k_sun.jpg',
  '/textures/planets/8k_venus_atmosphere.jpg',
];

const projects = [
  { name: 'Home-Based Palliative Care System', url: '#' },
  { name: 'Guglu1 – Personal AI Assistant', url: 'https://guglu1.onrender.com/' },
  { name: 'Hacker Portfolio', url: 'https://hacker-portfolio-beige.vercel.app/' },
  { name: 'SamratV1 – Food Delivery App', url: 'https://samratv1.vercel.app/' },
  { name: 'Weather UI', url: 'https://deady007.github.io/weather-app/' },
  { name: 'eSports Event Management', url: 'furious.42web.io' },
  { name: 'Money Management System', url: 'moneymanager.great-site.net/' },
  { name: 'Portfolio Website', url: 'https://deady007.github.io/My-site/' },
  { name: 'Task Management System', url: 'tasky.lovestoblog.com' },
  { name: 'Self-Help Care Group Management', url: '#' },
  { name: 'Weather App (Basic)', url: 'https://deady007.github.io/weather-app/' },
];

function Project({ project, index, total }) {
  const meshRef = useRef();

  // Load the texture for the current sphere
  const texture = useLoader(TextureLoader, planetTextures[index % planetTextures.length]);

  // Calculate position in a circular layout
  const angle = (index / total) * Math.PI * 2;
  const radius = 5;
  const x = radius * Math.cos(angle);
  const z = radius * Math.sin(angle);

  // Rotate the carousel
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    meshRef.current.rotation.y = time * 0.2; // Slow rotation
  });

  return (
    <mesh ref={meshRef} position={[x, 0, z]} onClick={() => window.open(project.url, '_blank')}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial map={texture} />
      <Html distanceFactor={10} position={[0, 1, 0]} occlude>
        <div className="text-white bg-black px-2 py-1 rounded shadow-md text-xs font-mono">
          {project.name}
        </div>
      </Html>
    </mesh>
  );
}

export default function Carousel() {
  return (
    <div className="h-screen w-full bg-black">
      <Canvas camera={{ position: [0, 5, 10], fov: 75 }}>
        <ambientLight intensity={2.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        {projects.map((project, index) => (
          <Project key={index} project={project} index={index} total={projects.length} />
        ))}
      </Canvas>
    </div>
  );
}
