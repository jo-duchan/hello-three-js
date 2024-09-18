import { useRef } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useControls } from "leva";
import { SOLAR_SYSTEM } from "./constants/solarSystemData";
import { initialCamera } from "./constants/cameraData";
import PlanetOrbit from "./components/PlanetOrbit";
import CameraController from "./components/CameraController";
import Light from "./components/Light";
import Sun from "./components/Sun";
import {
  Venus,
  Mercury,
  Earth,
  Mars,
  Jupiter,
  Saturn,
  Uranus,
  Neptune,
} from "./components/PlanetBase";

export type PlanetRef = React.RefObject<
  THREE.Mesh<
    THREE.BufferGeometry<THREE.NormalBufferAttributes>,
    THREE.Material | THREE.Material[],
    THREE.Object3DEventMap
  >
>;

export default function SolarSystemPage() {
  const mercuryRef = useRef<THREE.Mesh>(null);
  const venusRef = useRef<THREE.Mesh>(null);
  const earthRef = useRef<THREE.Mesh>(null);
  const marsRef = useRef<THREE.Mesh>(null);
  const jupiterRef = useRef<THREE.Mesh>(null);
  const saturnRef = useRef<THREE.Mesh>(null);
  const uranusRef = useRef<THREE.Mesh>(null);
  const neptuneRef = useRef<THREE.Mesh>(null);

  const planetView = useControls("planetView", {
    active: false,
    planetView: {
      options: {
        mercury: mercuryRef,
        venus: venusRef,
        earth: earthRef,
        mars: marsRef,
        jupiter: jupiterRef,
        saturn: saturnRef,
        uranus: uranusRef,
        neptune: neptuneRef,
      },
    },
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
      <axesHelper args={[initialCamera.far]} position={[0, 0, 0]} />
      <Light />
      <PlanetOrbit
        mercury={mercuryRef}
        venus={venusRef}
        earth={earthRef}
        mars={marsRef}
        jupiter={jupiterRef}
        saturn={saturnRef}
        uranus={uranusRef}
        neptune={neptuneRef}
      />
      {planetView.active && (
        <CameraController planetRef={planetView.planetView} />
      )}
      <Sun>
        <Mercury
          ref={mercuryRef}
          position={[SOLAR_SYSTEM.mercury.orbit.a, 0, 0]}
          radius={SOLAR_SYSTEM.mercury.radius}
          color="gray"
        ></Mercury>
        <Venus
          ref={venusRef}
          position={[SOLAR_SYSTEM.venus.orbit.a, 0, 0]}
          radius={SOLAR_SYSTEM.venus.radius}
          color="orange"
        ></Venus>
        <Earth
          ref={earthRef}
          position={[SOLAR_SYSTEM.earth.orbit.a, 0, 0]}
          radius={SOLAR_SYSTEM.earth.radius}
          color="dodgerblue"
        ></Earth>
        <Mars
          ref={marsRef}
          position={[SOLAR_SYSTEM.mars.orbit.a, 0, 0]}
          radius={SOLAR_SYSTEM.mars.radius}
          color="lightsalmon"
        ></Mars>
        <Jupiter
          ref={jupiterRef}
          position={[SOLAR_SYSTEM.jupiter.orbit.a, 0, 0]}
          radius={SOLAR_SYSTEM.jupiter.radius}
          color="darksalmon"
        ></Jupiter>
        <Saturn
          ref={saturnRef}
          position={[SOLAR_SYSTEM.saturn.orbit.a, 0, 0]}
          radius={SOLAR_SYSTEM.saturn.radius}
          color="tan"
        ></Saturn>
        <Uranus
          ref={uranusRef}
          position={[SOLAR_SYSTEM.uranus.orbit.a, 0, 0]}
          radius={SOLAR_SYSTEM.uranus.radius}
          color="slategray"
        ></Uranus>
        <Neptune
          ref={neptuneRef}
          position={[SOLAR_SYSTEM.neptune.orbit.a, 0, 0]}
          radius={SOLAR_SYSTEM.neptune.radius}
          color="azure"
        ></Neptune>
      </Sun>
    </Canvas>
  );
}
