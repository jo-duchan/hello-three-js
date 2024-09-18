import { forwardRef } from "react";
import * as THREE from "three";
import { SOLAR_SYSTEM } from "../constants/solarSystemData";

interface Props {
  children?: React.ReactNode;
}

const Sun = forwardRef<THREE.Mesh, Props>(function Sun(props, ref) {
  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <sphereGeometry args={[SOLAR_SYSTEM.sun.radius, 32, 32]} />
      <meshStandardMaterial
        color="orangered"
        emissive="orangered"
        emissiveIntensity={1.5}
      />
      {props.children}
    </mesh>
  );
});

export default Sun;
