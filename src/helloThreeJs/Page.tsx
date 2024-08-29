import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Camera from "./components/Camera";
import TextModal from "./components/TextGeometry";

export default function HelloThreeJsPage() {
  return (
    <Canvas className="three">
      <ambientLight color={0xffffff} intensity={0.3} />
      <directionalLight
        color={0xffffff}
        intensity={0.8}
        position={[0, 0, 10]}
        target-position={[0, 0, 0]}
      />
      <OrbitControls target={[0, 5, 0]} />
      <Camera />
      <TextModal />
    </Canvas>
  );
}
