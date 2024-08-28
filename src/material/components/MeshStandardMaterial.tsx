import { useRef } from "react";
import { Mesh } from "three";
import { Box } from "@react-three/drei";
import { useControls } from "leva";

function MeshStandardMaterial(): JSX.Element {
  const mesh = useRef<Mesh>(null!);

  const meshStandard = useControls("meshStandard", {
    color: "RoyalBlue",
    metalness: { value: 0.6, min: 0, max: 1, step: 0.1 },
    roughness: { value: 0.4, min: 0, max: 1, step: 0.1 },
  });

  return (
    <Box ref={mesh} position={[6, 1.5, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color={meshStandard.color}
        metalness={meshStandard.metalness}
        roughness={meshStandard.roughness}
      />
    </Box>
  );
}
export default MeshStandardMaterial;
