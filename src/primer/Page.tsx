import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Camera from "./components/Camera";
import BoxModel from "./components/BoxModel";

export default function PrimerPage() {
  return (
    <Canvas className="three">
      <ambientLight color={0xffffff} intensity={0.7} />
      <directionalLight color={0xffffff} intensity={0.7} />
      <OrbitControls />
      <Camera />
      <BoxModel />
    </Canvas>
  );
}
