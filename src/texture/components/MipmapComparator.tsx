import * as THREE from "three";
import { useRef } from "react";
import { Mesh, TextureLoader } from "three";
import { Box } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";

function MipmapComparator(): JSX.Element {
  const mesh2 = useRef<Mesh>(null!);
  const originalTexture = useLoader(
    TextureLoader,
    "assets/common/checker-scale-30.png"
  );

  const texture = originalTexture.clone();
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.colorSpace = THREE.SRGBColorSpace;
  const repeatsW = 20 / 2;
  const repeatsH = 400 / 2;
  texture.repeat.set(repeatsW, repeatsH);
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.LinearMipMapLinearFilter;

  return (
    <Box ref={mesh2} position={[-10, 0, 0]} rotation-x={Math.PI * -0.5}>
      <planeGeometry args={[20, 400]} />
      <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
    </Box>
  );
}
export default MipmapComparator;
