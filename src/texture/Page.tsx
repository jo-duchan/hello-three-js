import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";

import Camera from "./components/Camera";
import Light from "./components/Light";
import MipmapConfigurator from "./components/MipmapConfigurator";
import MipmapComparator from "./components/MipmapComparator";
import GuideLine from "./components/GuideLine";

export const magOptions = {
  LinearFilter: THREE.LinearFilter,
  NearestFilter: THREE.NearestFilter,
};

export const minOptions = {
  NearestFilter: THREE.NearestFilter,
  NearestMipmapNearestFilter: THREE.NearestMipmapNearestFilter,
  NearestMipmapLinearFilter: THREE.NearestMipmapLinearFilter,
  LinearFilter: THREE.LinearFilter,
  LinearMipmapNearestFilter: THREE.LinearMipmapNearestFilter,
  LinearMipMapLinearFilter: THREE.LinearMipMapLinearFilter,
};

export default function TexturePage() {
  const magFilter = useControls("magFilter", {
    value: {
      options: magOptions,
    },
  });

  const minFilter = useControls("minFilter", {
    value: {
      options: minOptions,
    },
  });

  return (
    <>
      <Canvas>
        <MipmapConfigurator
          magFilter={magFilter.value}
          minFilter={minFilter.value}
        />
        <MipmapComparator />
        <Camera />
        <Light />
      </Canvas>
      <GuideLine magFilter={magFilter.value} minFilter={minFilter.value} />
    </>
  );
}
