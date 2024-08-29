import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Camera from "./components/Camera";
import MeshBasicMaterial from "./components/MeshBasicMaterial";
import MeshNormalMaterial from "./components/MeshNormalMaterial";
import MeshPhongMaterial from "./components/MeshPhongMaterial";
import MeshStandardMaterial from "./components/MeshStandardMaterial";
import Plane from "./components/Plane";

export default function MaterialPage() {
  return (
    <Canvas>
      <ambientLight color={0x444444} intensity={5} />
      <directionalLight castShadow intensity={2} position={[0, 3, 3]} />
      <Camera />
      <MeshBasicMaterial />
      <MeshNormalMaterial />
      <MeshPhongMaterial />
      <MeshStandardMaterial />
      <OrbitControls target={[0, 0, 0]} />
      <Plane />
    </Canvas>
  );
}
