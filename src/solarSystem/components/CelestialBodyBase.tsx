import { forwardRef } from "react";
import * as THREE from "three";
import Label from "./Label";

interface Props {
  children?: React.ReactNode; // Scene graph를 만들기 위해, children을 옵셔널로 받아 local space를 생성한다.
  position: [number, number, number];
  diameter: number;
  color: string;
  metalness?: number;
  roughness?: number;
  label?: string;
  labelVisible?: boolean;
}

const CelestialBodyBase = forwardRef<THREE.Mesh, Props>(
  function CelestialBodyBase({ labelVisible = true, ...props }, ref) {
    return (
      <mesh ref={ref} position={props.position}>
        <sphereGeometry args={[props.diameter, 32, 32]} />
        <meshStandardMaterial
          color={props.color}
          emissive={props.color}
          emissiveIntensity={1.5}
          metalness={props.metalness}
          roughness={props.roughness}
        />
        {labelVisible && (
          <Label label={props.label} diameter={props.diameter} />
        )}
        {props.children}
      </mesh>
    );
  }
);

// 행성
export const Mercury = CelestialBodyBase;
export const Venus = CelestialBodyBase;
export const Earth = CelestialBodyBase;
export const Mars = CelestialBodyBase;
export const Jupiter = CelestialBodyBase;
export const Saturn = CelestialBodyBase;
export const Uranus = CelestialBodyBase;
export const Neptune = CelestialBodyBase;

// 위성
export const Moon = CelestialBodyBase;
export const Phobos = CelestialBodyBase;
export const Deimos = CelestialBodyBase;
export const Io = CelestialBodyBase;
export const Europa = CelestialBodyBase;
export const Ganymede = CelestialBodyBase;
export const Callisto = CelestialBodyBase;
export const Titan = CelestialBodyBase;
export const Enceladus = CelestialBodyBase;
export const Mimas = CelestialBodyBase;
export const Dione = CelestialBodyBase;
export const Rhea = CelestialBodyBase;
export const Tethys = CelestialBodyBase;
export const Iapetus = CelestialBodyBase;
export const Miranda = CelestialBodyBase;
export const Ariel = CelestialBodyBase;
export const Umbriel = CelestialBodyBase;
export const Titania = CelestialBodyBase;
export const Oberon = CelestialBodyBase;
export const Triton = CelestialBodyBase;
export const Nereid = CelestialBodyBase;
export const Proteus = CelestialBodyBase;
