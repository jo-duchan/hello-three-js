import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useControls } from "leva";
import { initialCamera } from "./constants/cameraData";
import useCelestialRefs from "./hooks/useCelestialRefs";
import PlanetOrbit from "./components/PlanetOrbit";
import CameraController from "./components/CameraController";
import AxesHelper from "./components/AxesHelper";
import Light from "./components/Light";
import CelestialBodies from "./components/CelestialBodies";

export default function SolarSystemPage() {
  const { planets, satellites } = useCelestialRefs();

  const followPlanet = useControls("Follow Planet", {
    active: false,
    lookAtPlanet: false,
    planet: {
      options: {
        mercury: planets.mercuryRef,
        venus: planets.venusRef,
        earth: planets.earthRef,
        mars: planets.marsRef,
        jupiter: planets.jupiterRef,
        saturn: planets.saturnRef,
        uranus: planets.uranusRef,
        neptune: planets.neptuneRef,
      },
    },
    zoom: { value: 100, min: 0, max: 1000, step: 1 },
  });

  return (
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
      <CameraController
        planetRef={followPlanet.planet}
        followPlanet={followPlanet.active}
        lookAtPlanet={followPlanet.lookAtPlanet}
        zoom={followPlanet.zoom}
      />
      <CelestialBodies planets={planets} satellites={satellites} />
    </Canvas>
  );
}
