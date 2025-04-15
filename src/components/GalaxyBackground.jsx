import { Canvas, useFrame, useLoader, extend } from "@react-three/fiber";
import {
  OrbitControls,
  Stars,
  shaderMaterial,
  useTexture,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import { EffectComposer, Bloom, DepthOfField } from "@react-three/postprocessing";
import * as THREE from "three";
import { useRef } from "react";
import AtmosphereMaterial from "./GlowShader"; // Import the new shader material

// 🌌 Glow Shader
const vertexShader = `
  varying vec3 vNormal;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;
const fragmentShader = `
  varying vec3 vNormal;
  void main() {
    float intensity = pow(0.65 - dot(vNormal, vec3(0, 0, 1.0)), 2.0);
    float fade = smoothstep(0.0, 1.0, length(vNormal));
    gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity * fade;
  }
`;

extend({ AtmosphereMaterial });

const Atmosphere = () => (
  <mesh scale={[1.05, 1.05, 1.05]}>
    <sphereGeometry args={[1, 64, 64]} />
    <atmosphereMaterial side={THREE.BackSide} />
  </mesh>
);

// 🌍 Earth System
const PlanetSystem = () => {
  const earthRef = useRef();
  const cloudRef = useRef();

  const [dayMap, normalMap, specularMap, cloudMap] = useTexture([
    "/textures/earth/earth_day.jpg",
    "/textures/earth/earth_normal.jpg",
    "/textures/earth/earth_specular.jpg",
    "/textures/earth/Earth-clouds.png",
  ]);

  useFrame(() => {
    // Rotate the Earth and clouds
    earthRef.current.rotation.y += 0.0008;
    cloudRef.current.rotation.y += 0.001;
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Earth */}
      <mesh ref={earthRef} castShadow receiveShadow>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhongMaterial
          map={dayMap}
          normalMap={normalMap}
          specularMap={specularMap}
          shininess={80}
        />
      </mesh>

      {/* Clouds */}
      <mesh ref={cloudRef}>
        <sphereGeometry args={[1.01, 64, 64]} />
        <meshPhongMaterial
          map={cloudMap}
          transparent
          opacity={0.3}
          depthWrite={false}
        />
      </mesh>

      {/* Glow */}
      <Atmosphere />
    </group>
  );
};

const GalaxyBackground = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 1.5]} // Lower the device pixel ratio for better performance
      camera={{ position: [0, 0, 4], fov: 40 }}
    >
      {/* Background */}
      <color attach="background" args={["#000"]} />
      <Stars
        radius={200} // Reduce the radius
        depth={50} // Reduce depth for fewer stars
        count={5000} // Reduce the number of stars
        factor={4} // Adjust the spread of stars
      />

      {/* Lighting */}
      <ambientLight intensity={0.2} />
      <directionalLight
        position={[5, 3, 5]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={1024} // Reduce shadow map size
        shadow-mapSize-height={1024}
      />

      {/* Earth */}
      <PlanetSystem />

      {/* Environment Reflections */}
      <Environment preset="night" />

      {/* Shadows */}
      <ContactShadows
        position={[0, -1.5, 0]}
        opacity={0.4} // Reduce opacity for better performance
        width={8} // Reduce shadow size
        height={8}
        blur={1.5}
        far={3}
      />

      {/* Controls */}
      <OrbitControls autoRotate enableZoom maxDistance={10} minDistance={3} />

      {/* Postprocessing */}
      <EffectComposer>
        <Bloom
          intensity={0.8} // Reduce bloom intensity
          luminanceThreshold={0.4}
          luminanceSmoothing={1.5}
        />
        <DepthOfField focusDistance={0.02} focalLength={0.1} bokehScale={1.5} />
      </EffectComposer>
    </Canvas>
  );
};

export default GalaxyBackground;
