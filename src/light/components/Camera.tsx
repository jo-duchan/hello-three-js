import { PerspectiveCamera } from "@react-three/drei";

const { innerWidth, innerHeight } = window;

function Camera(): JSX.Element {
  return (
    <PerspectiveCamera
      makeDefault
      fov={45}
      aspect={innerWidth / innerHeight}
      near={0.1}
      far={100}
      position={[0, 10, 20]}
    />
  );
}

export default Camera;
