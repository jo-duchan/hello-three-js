import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { SOLAR_SYSTEM } from "../constants/solarSystemData";
import { getTheta, getOrbitRadius } from "../utils/orbit-utils";

type PlanetRef = React.RefObject<
  THREE.Mesh<
    THREE.BufferGeometry<THREE.NormalBufferAttributes>,
    THREE.Material | THREE.Material[],
    THREE.Object3DEventMap
  >
>;

interface Props {
  mercury: PlanetRef;
  venus: PlanetRef;
  earth: PlanetRef;
  mars: PlanetRef;
  jupiter: PlanetRef;
  saturn: PlanetRef;
  uranus: PlanetRef;
  neptune: PlanetRef;
}

function PlanetOrbit(props: Props) {
  useFrame(() => {
    const time = Date.now() * 1; // 시간을 500,000배(궤도 긴반지름 스케일 축소에 영향을 받음) 빠르게 조정하여 애니메이션 속도 조절

    Object.entries(props).forEach(([key, ref]) => {
      const current = ref?.current;

      if (current && current.position) {
        const { a, e } = SOLAR_SYSTEM[key as keyof typeof SOLAR_SYSTEM].orbit;
        const theta = getTheta(time, a);
        const orbitRadius = getOrbitRadius(a, e, theta);

        current.position.x = orbitRadius * Math.cos(theta);
        current.position.z = orbitRadius * Math.sin(theta);
      }
    });
  });

  return null;
}

export default PlanetOrbit;
