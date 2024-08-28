import { useRef } from "react";
import { Mesh } from "three";
import { Box } from "@react-three/drei";
import { useControls } from "leva";
import { useFrame } from "@react-three/fiber";

function MeshNormalMaterial(): JSX.Element {
  const mesh = useRef<Mesh>(null!);

  const meshNormal = useControls("meshNormal", {
    flatShading: true,
    // widthSegments: { value: 16, min: 4, max: 64, step: 1 },
    // heightSegments: { value: 16, min: 4, max: 64, step: 1 },
  });

  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <Box ref={mesh} position={[-2, 1.5, 0]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshNormalMaterial
        flatShading={meshNormal.flatShading}
        key={meshNormal.flatShading ? "flat" : "smooth"}
      />
    </Box>
  );
}
export default MeshNormalMaterial;
