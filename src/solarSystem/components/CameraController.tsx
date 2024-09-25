import { useFrame, useThree } from "@react-three/fiber";
import { initialCamera } from "../constants/cameraData";
import { type PlanetRef } from "../Page";

interface Props {
  followPlanet: boolean;
  lookAtPlanet: boolean;
  planetRef: PlanetRef;
  zoom: number;
}

function CameraController({
  planetRef,
  followPlanet,
  lookAtPlanet,
  zoom,
}: Props) {
  const { camera } = useThree();

  useFrame(() => {
    const current = planetRef?.current;

    if (followPlanet && current) {
      const cameraPosition = [
        current.position.x,
        current.position.y + 100,
        current.position.z + zoom,
      ];

      let cameraLookAt = [
        initialCamera.lookAt.x,
        initialCamera.lookAt.y,
        initialCamera.lookAt.z,
      ];

      if (lookAtPlanet) {
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
