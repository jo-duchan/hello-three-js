import { useRef } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { SOLAR_SYSTEM } from "./constants/solarSystemData";
import PlanetOrbit from "./components/PlanetOrbit";
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

export default function SolarSystemPage() {
  const mercuryRef = useRef<THREE.Mesh>(null);
  const venusRef = useRef<THREE.Mesh>(null);
  const earthRef = useRef<THREE.Mesh>(null);
  const marsRef = useRef<THREE.Mesh>(null);
  const jupiterRef = useRef<THREE.Mesh>(null);
  const saturnRef = useRef<THREE.Mesh>(null);
  const uranusRef = useRef<THREE.Mesh>(null);
  const neptuneRef = useRef<THREE.Mesh>(null);

  return (
    <Canvas style={{ background: "#101010" }}>
      <PerspectiveCamera
        makeDefault
        position={[0, 50, 500]}
        fov={50}
        near={0.1}
        far={12000}
      />
      <OrbitControls enableZoom={true} />
      <axesHelper args={[12000]} position={[0, 0, 0]} />
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
          color="blue"
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
