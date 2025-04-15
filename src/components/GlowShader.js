import { shaderMaterial } from "@react-three/drei";
import * as THREE from "three";
import { extend } from "@react-three/fiber";

// More subtle, edge-falloff effect
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
    float intensity = pow(0.5 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 6.0);
    gl_FragColor = vec4(0.1, 0.6, 1.0, 1.0) * intensity;
  }
`;

const AtmosphereMaterial = shaderMaterial({}, vertexShader, fragmentShader);
extend({ AtmosphereMaterial });

export default AtmosphereMaterial;