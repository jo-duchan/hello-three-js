import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { SOLAR_SYSTEM } from "../constants/solarSystemData";
import { getTheta, getOrbitRadius } from "../utils/orbit-utils";
import { type PlanetRef } from "../Page";

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
  const timeScale = useControls("time scale", {
    time: { value: 1, min: 0.5, max: 10, step: 0.1 },
  });

  useFrame(() => {
    const time = Date.now() * timeScale.time; // 시간을 400,000배(궤도 긴반지름 스케일 축소에 영향을 받음) 빠르게 조정하여 애니메이션 속도 조절

    // 각 행성의 ref를 props로 받아 반복문으로 x, z값을 할당
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
