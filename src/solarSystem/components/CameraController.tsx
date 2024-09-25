import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { initialCamera } from "../constants/cameraData";
import { type CelestialRefs } from "../hooks/useCelestialRefs";

interface Props {
  planets: CelestialRefs;
}

function CameraController({ planets }: Props) {
  const { camera } = useThree();

  const followPlanet = useControls("Follow Planet", {
    active: false,
    lookAtPlanet: false,
    planet: {
      options: {
        mercury: planets.mercuryRef,
        venus: planets.venusRef,
        earth: planets.earthRef,
        mars: planets.marsRef,
        jupiter: planets.jupiterRef,
        saturn: planets.saturnRef,
        uranus: planets.uranusRef,
        neptune: planets.neptuneRef,
      },
    },
    zoom: { value: 100, min: 0, max: 1000, step: 1 },
  });

  useFrame(() => {
    const current = followPlanet.planet?.current;

    if (followPlanet && current) {
      const cameraPosition = [
        current.position.x,
        current.position.y + 100,
        current.position.z + followPlanet.zoom,
      ];

      let cameraLookAt = [
        initialCamera.lookAt.x,
        initialCamera.lookAt.y,
        initialCamera.lookAt.z,
      ];

      if (followPlanet.lookAtPlanet) {
        cameraLookAt = [
          current.position.x,
          current.position.y,
          current.position.z,
        ];
      }

      // 행성의 위치로 카메라 이동
      camera.position.set(
        cameraPosition[0],
        cameraPosition[1],
        cameraPosition[2]
      );
      // 카메라가 태양 또는 행성을 바라보도록 설정
      camera.lookAt(cameraLookAt[0], cameraLookAt[1], cameraLookAt[2]);
    }
  });

  if (!followPlanet) {
    camera.position.set(
      initialCamera.position.x,
      initialCamera.position.y,
      initialCamera.position.z
    );
  }

  return null;
}

export default CameraController;
