// src/components/Skills.jsx
import React, { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { skills } from './skillsData';

const SkillSphere = ({ img, position }) => {
  const texture = useLoader(THREE.TextureLoader, img); // Load texture

  return (
    <mesh position={position}>
      <sphereGeometry args={[0.8, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

const Skills = () => {
  return (
    <div className="w-full h-[80vh] bg-black rounded-xl mt-10">
      <Canvas>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} />
        <Stars radius={50} depth={50} count={5000} factor={4} fade />
        <Suspense fallback={null}>
          {skills.map((skill, i) => {
            const angle = (i / skills.length) * Math.PI * 2;
            const radius = 5;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            return <SkillSphere key={i} img={skill.img} position={[x, y, 0]} />;
          })}
        </Suspense>
        <OrbitControls autoRotate />
      </Canvas>
    </div>
  );
};

export default Skills;
