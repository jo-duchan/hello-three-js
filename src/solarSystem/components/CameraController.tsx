import { useFrame, useThree } from "@react-three/fiber";
import { initialCamera } from "../constants/cameraData";
import { type PlanetRef } from "../Page";

interface Props {
  isPlanetView: boolean;
  planetRef: PlanetRef;
}

function CameraController({ planetRef, isPlanetView }: Props) {
  const { camera } = useThree();

  if (isPlanetView) {
    useFrame(() => {
      const current = planetRef?.current;

      if (current) {
        // 행성의 위치로 카메라 이동
        // 행성에서 약간 떨어진 위치에 카메라 배치
        camera.position.set(
          current.position.x,
          current.position.y + 100,
          current.position.z + 100
        );

        // 카메라가 태양(0, 0, 0)을 바라보도록 설정
        camera.lookAt(
          initialCamera.lookAt.x,
          initialCamera.lookAt.y,
          initialCamera.lookAt.z
        );
      }
    });
  } else {
    camera.position.set(
      initialCamera.position.x,
      initialCamera.position.y,
      initialCamera.position.z
    );
  }

  return null;
}

export default CameraController;
