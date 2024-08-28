import { useRef } from "react";
import { Mesh } from "three";
import { Box } from "@react-three/drei";
import { useControls } from "leva";

function ConeWireframe(): JSX.Element {
  const mesh = useRef<Mesh>(null!);

  const cone = useControls("cone", {
    radialSegments: { value: 16, min: 4, max: 64, step: 1 },
  });

  return (
    <Box ref={mesh} position={[0, 1.5, 0]}>
      <coneGeometry args={[1, 2, cone.radialSegments]} />
      <meshBasicMaterial wireframe color="yellow" />
    </Box>
  );
}
export default ConeWireframe;
