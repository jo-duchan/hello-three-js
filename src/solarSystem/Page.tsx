import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { initialCamera } from "./constants/cameraData";
import useCelestialRefs from "./hooks/useCelestialRefs";
import PlanetOrbit from "./components/PlanetOrbit";
import CameraController from "./components/CameraController";
import AxesHelper from "./components/AxesHelper";
import Light from "./components/Light";
import CelestialBodies from "./components/CelestialBodies";
import Caption from "./components/Caption";

export default function SolarSystemPage() {
  const { planets, satellites } = useCelestialRefs();

  return (
    <>
      <Canvas style={{ background: "#101010" }}>
        <PerspectiveCamera
          makeDefault
          position={[
            initialCamera.position.x,
            initialCamera.position.y,
            initialCamera.position.z,
          ]}
          fov={initialCamera.for}
          near={initialCamera.near}
          far={initialCamera.far}
        />
        <OrbitControls enableZoom={true} />
        <AxesHelper />
        <Light />
        <PlanetOrbit {...planets} {...satellites} />
        <CameraController planets={planets} />
        <CelestialBodies planets={planets} satellites={satellites} />
      </Canvas>
      <Caption />
    </>
  );
}
