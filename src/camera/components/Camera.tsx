import { PerspectiveCamera } from "@react-three/drei";
import { useControls } from "leva";

const { innerWidth, innerHeight } = window;

function Camera(): JSX.Element {
  const camera = useControls("camera", {
    fov: { value: 75, min: 1, max: 180, step: 0.01 },
    near: { value: 0.1, min: 0.1, max: 50, step: 0.01 },
    far: { value: 50, min: 0.1, max: 50, step: 0.01 },
  });

  return (
    <PerspectiveCamera
      makeDefault
      fov={camera.fov}
      aspect={innerWidth / innerHeight}
      near={camera.near}
      far={camera.far}
      position={[0, 0, 5]}
    />
  );
}

export default Camera;
