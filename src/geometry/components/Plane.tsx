import * as THREE from "three";
import { useRef } from "react";
import { Mesh, TextureLoader } from "three";
import { Box } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";

function Plane(): JSX.Element {
  const mesh = useRef<Mesh>(null!);
  const texture = useLoader(TextureLoader, "assets/common/checker.png");
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.magFilter = THREE.NearestFilter;
  texture.colorSpace = THREE.SRGBColorSpace;
  const repeats = 40 / 2;
  texture.repeat.set(repeats, repeats);

  return (
    <Box ref={mesh} rotation-x={Math.PI * -0.5}>
      <planeGeometry args={[40, 40]} />
      <meshPhongMaterial map={texture} side={THREE.DoubleSide} />
    </Box>
  );
}
export default Plane;
