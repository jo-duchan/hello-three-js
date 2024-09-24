import * as THREE from "three";
import { useRef, useEffect } from "react";
import { Mesh, TextureLoader } from "three";
import { Box } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { magOptions, minOptions } from "../Page";

interface Props {
  magFilter: (typeof magOptions)[keyof typeof magOptions];
  minFilter: (typeof minOptions)[keyof typeof minOptions];
}

function MipmapConfigurator({ magFilter, minFilter }: Props): JSX.Element {
  const mesh = useRef<Mesh>(null!);
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

  useEffect(() => {
    texture.magFilter = magFilter;
    texture.needsUpdate = true; // 텍스처 업데이트를 강제함
  }, [magFilter, texture]);

  useEffect(() => {
    texture.minFilter = minFilter;
    texture.needsUpdate = true; // 텍스처 업데이트를 강제함
  }, [minFilter, texture]);

  return (
    <Box ref={mesh} position={[10, 0, 0]} rotation-x={Math.PI * -0.5}>
      <planeGeometry args={[20, 400]} />
      <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
    </Box>
  );
}
export default MipmapConfigurator;
