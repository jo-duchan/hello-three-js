import { forwardRef } from "react";
import * as THREE from "three";

interface Props {
  children?: React.ReactNode;
  position: [number, number, number];
  radius: number;
  color: string;
  metalness?: number;
  roughness?: number;
}

const PlanetBase = forwardRef<THREE.Mesh, Props>(function PlanetBase(
  props,
  ref
) {
  return (
    <mesh ref={ref} position={props.position}>
      <sphereGeometry args={[props.radius, 32, 32]} />
      <meshStandardMaterial
        color={props.color}
        emissive={props.color}
        emissiveIntensity={0.3}
        metalness={props.metalness}
        roughness={props.roughness}
      />
      {props.children}
    </mesh>
  );
});

export const Mercury = PlanetBase;
export const Venus = PlanetBase;
export const Earth = PlanetBase;
export const Mars = PlanetBase;
export const Jupiter = PlanetBase;
export const Saturn = PlanetBase;
export const Uranus = PlanetBase;
export const Neptune = PlanetBase;
