import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Camera from "./components/Camera";
import SphereWireframe from "./components/SphereWireframe";
import ConeWireframe from "./components/ConeWireframe";
import CubeWireframe from "./components/CubeWireframe";
import Plane from "./components/Plane";

export default function GeometryPage() {
  return (
    <Canvas className="three">
      <ambientLight color={0x444444} intensity={5} />
      <directionalLight castShadow intensity={10} position={[0, 0, 3]} />
      <Camera />
      <SphereWireframe />
      <ConeWireframe />
      <CubeWireframe />
      <OrbitControls target={[0, 0, 0]} />
      <Plane />
    </Canvas>
  );
}
