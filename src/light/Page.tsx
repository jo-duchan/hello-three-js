import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Camera from "./components/Camera";
import Earth from "./components/Object3D";
import PlaneGeo from "./components/PlaneGeo";
import Light from "./components/Light";

export default function LightPage() {
  return (
    <Canvas className="three">
      <Light />
      <Camera />
      <Earth />
      <PlaneGeo />
      <OrbitControls target={[0, 5, 0]} />
      <axesHelper args={[5]} position={[0, 1.5, 0]} />
    </Canvas>
  );
}
