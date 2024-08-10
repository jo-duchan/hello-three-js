import { PerspectiveCamera } from "@react-three/drei";

const { innerWidth, innerHeight } = window;

function Camera(): JSX.Element {
  return (
    <PerspectiveCamera
      makeDefault
      fov={75}
      aspect={innerWidth / innerHeight}
      near={0.1}
      far={1000}
      position={[0, 0, 5]}
    />
  );
}

export default Camera;
