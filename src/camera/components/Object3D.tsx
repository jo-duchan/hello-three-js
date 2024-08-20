import { useRef } from "react";
import { Mesh, TextureLoader } from "three";
import { Box } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";

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

  return (
    <Box ref={mesh}>
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
