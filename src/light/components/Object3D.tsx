import { useRef } from "react";
import { Mesh, TextureLoader } from "three";
import { Box } from "@react-three/drei";
import { useLoader, useFrame } from "@react-three/fiber";

function Object3D(): JSX.Element {
  const mesh = useRef<Mesh>(null!);
  const textureMap = useLoader(
    TextureLoader,
    "assets/common/worldColour.5400x2700.jpg"
  );
  const srtmMap = useLoader(
    TextureLoader,
    "assets/common/srtm_ramp2.world.5400x2700.jpg"
  );

  useFrame(() => {
    mesh.current.rotation.y += 0.005;
  });

  return (
    <Box ref={mesh} position={[0, 1.5, 0]}>
      <sphereGeometry args={[1, 720, 360]} />
      <meshStandardMaterial
        map={textureMap}
        displacementMap={srtmMap}
        displacementScale={0.05}
      />
    </Box>
  );
}
export default Object3D;
