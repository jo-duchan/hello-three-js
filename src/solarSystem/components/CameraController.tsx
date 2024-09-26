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
    trackingSun: true,
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
    distance: { value: 200, min: 0, max: 1000, step: 1 }, // 행성에서의 거리
    angle: { value: 0, min: 0, max: 360, step: 1 }, // 행성 주위의 각도
  });

  useFrame(() => {
    const current = followPlanet.planet?.current;
    const sunPosition = {
      x: initialCamera.lookAt.x,
      y: initialCamera.lookAt.y,
      z: initialCamera.lookAt.z,
    };

    if (followPlanet.active && current) {
      const distance = followPlanet.distance; // 행성에서의 거리
      const angleRad = (followPlanet.angle * Math.PI) / 180; // 각도를 라디안으로 변환

      let cameraPosition = [
        current.position.x + distance * Math.cos(angleRad),
        current.position.y + 100,
        current.position.z + distance * Math.sin(angleRad),
      ];

      let cameraLookAt = [
        initialCamera.lookAt.x,
        initialCamera.lookAt.y,
        initialCamera.lookAt.z,
      ];

      if (followPlanet.trackingSun) {
        // 태양으로부터 행성의 벡터 계산
        const dx = current.position.x - sunPosition.x;
        const dz = current.position.z - sunPosition.z;

        // 태양의 반대 방향으로 카메라 위치 설정
        const angleToPlanet = Math.atan2(dz, dx); // 태양 반대편 각도

        cameraPosition = [
          current.position.x + distance * Math.cos(angleToPlanet), // x축에서 카메라 위치 계산
          current.position.y + 100, // 고정된 높이
          current.position.z + distance * Math.sin(angleToPlanet), // z축에서 카메라 위치 계산
        ];
      }

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

  if (!followPlanet.active) {
    camera.position.set(
      initialCamera.position.x,
      initialCamera.position.y,
      initialCamera.position.z
    );
  }

  return null;
}

export default CameraController;
