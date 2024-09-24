import { PerspectiveCamera } from "@react-three/drei";

const { innerWidth, innerHeight } = window;

function Camera(): JSX.Element {
  return (
    <PerspectiveCamera
      makeDefault
      fov={45}
      aspect={innerWidth / innerHeight}
      near={0.1}
      far={500}
      position={[0, 1, 202.4]}
    />
  );
}

export default Camera;
