import { useRef } from "react";
import { Mesh } from "three";
import { Box } from "@react-three/drei";
import { useControls } from "leva";

function MeshBasicMaterial(): JSX.Element {
  const mesh = useRef<Mesh>(null!);

  const meshBasic = useControls("meshBasic", {
    color: "hotpink",
  });

  return (
    <Box ref={mesh} position={[-6, 1.5, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshBasicMaterial color={meshBasic.color} />
    </Box>
  );
}
export default MeshBasicMaterial;
