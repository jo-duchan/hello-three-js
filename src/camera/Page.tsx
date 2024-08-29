import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Camera from "./components/Camera";
import Earth from "./components/Object3D";

export default function CameraPage() {
  return (
    <Canvas>
      <ambientLight color={0x444444} intensity={5} />
      <directionalLight castShadow intensity={10} position={[0, 0, 3]} />
      <Camera />
      <Earth />
      <OrbitControls />
      <axesHelper args={[5]} />
      <gridHelper
        args={[20, 20, 0xff0000, "teal"]}
        rotation={[Math.PI / 4, 0, 0]}
      />
    </Canvas>
  );
}
