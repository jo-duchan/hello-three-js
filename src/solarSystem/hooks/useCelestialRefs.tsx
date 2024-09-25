import { useRef } from "react";
import * as THREE from "three";

// 행성 및 위성 타입 정의
export type CelestialRefs = {
  [key: string]: React.RefObject<THREE.Mesh>;
};

function useCelestialRefs(): {
  planets: CelestialRefs;
  satellites: CelestialRefs;
} {
  const mercuryRef = useRef<THREE.Mesh>(null);
  const venusRef = useRef<THREE.Mesh>(null);
  const earthRef = useRef<THREE.Mesh>(null);
  const marsRef = useRef<THREE.Mesh>(null);
  const jupiterRef = useRef<THREE.Mesh>(null);
  const saturnRef = useRef<THREE.Mesh>(null);
  const uranusRef = useRef<THREE.Mesh>(null);
  const neptuneRef = useRef<THREE.Mesh>(null);

  // 위성
  const moonRef = useRef<THREE.Mesh>(null);
  const phobosRef = useRef<THREE.Mesh>(null);
  const deimosRef = useRef<THREE.Mesh>(null);
  const ioRef = useRef<THREE.Mesh>(null);
  const europaRef = useRef<THREE.Mesh>(null);
  const ganymedeRef = useRef<THREE.Mesh>(null);
  const callistoRef = useRef<THREE.Mesh>(null);
  const titanRef = useRef<THREE.Mesh>(null);
  const enceladusRef = useRef<THREE.Mesh>(null);
  const mimasRef = useRef<THREE.Mesh>(null);
  const dioneRef = useRef<THREE.Mesh>(null);
  const rheaRef = useRef<THREE.Mesh>(null);
  const tethysRef = useRef<THREE.Mesh>(null);
  const iapetusRef = useRef<THREE.Mesh>(null);
  const mirandaRef = useRef<THREE.Mesh>(null);
  const arielRef = useRef<THREE.Mesh>(null);
  const umbrielRef = useRef<THREE.Mesh>(null);
  const titaniaRef = useRef<THREE.Mesh>(null);
  const oberonRef = useRef<THREE.Mesh>(null);
  const tritonRef = useRef<THREE.Mesh>(null);
  const nereidRef = useRef<THREE.Mesh>(null);
  const proteusRef = useRef<THREE.Mesh>(null);

  return {
    planets: {
      mercuryRef,
      venusRef,
      earthRef,
      marsRef,
      jupiterRef,
      saturnRef,
      uranusRef,
      neptuneRef,
    },
    satellites: {
      moonRef,
      phobosRef,
      deimosRef,
      ioRef,
      europaRef,
      ganymedeRef,
      callistoRef,
      titanRef,
      enceladusRef,
      mimasRef,
      dioneRef,
      rheaRef,
      tethysRef,
      iapetusRef,
      mirandaRef,
      arielRef,
      umbrielRef,
      titaniaRef,
      oberonRef,
      tritonRef,
      nereidRef,
      proteusRef,
    },
  };
}

export default useCelestialRefs;
