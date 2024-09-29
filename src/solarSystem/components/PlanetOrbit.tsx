import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { SOLAR_SYSTEM } from "../constants/solarSystemData";
import { getTheta, getOrbitRadius } from "../utils/orbit-utils";
import { type CelestialRefs } from "../hooks/useCelestialRefs";

interface Props extends CelestialRefs {}

function PlanetOrbit(props: Props) {
  const timeScale = useControls("Time Scale", {
    time: { value: 15, min: 0.1, max: 50, step: 0.1 },
  });

  useFrame(() => {
    const time = Date.now() * (timeScale.time * 0.001); // 궤도 긴반지름 스케일 축소에 영향을 받음

    // 각 행성의 ref를 props로 받아 반복문으로 x, z값을 할당
    Object.entries(props).forEach(([oldKey, ref]) => {
      const current = ref?.current;
      const key = oldKey.replace("Ref", "");

      if (current && current.position) {
        const { a, e, periodRatio } =
          SOLAR_SYSTEM[key as keyof typeof SOLAR_SYSTEM].orbit;

        const theta = getTheta(time, periodRatio);
        const orbitRadius = getOrbitRadius(a, e, theta);

        // 행성의 새로운 위치 계산
        current.position.x = orbitRadius * Math.cos(theta);
        current.position.z = orbitRadius * Math.sin(theta);
      }
    });
  });

  return null;
}

export default PlanetOrbit;
