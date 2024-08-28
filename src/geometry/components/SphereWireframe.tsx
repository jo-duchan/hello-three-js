import { useRef } from "react";
import { Mesh } from "three";
import { Box } from "@react-three/drei";
import { useControls } from "leva";

function SphereWireFrame(): JSX.Element {
  const mesh = useRef<Mesh>(null!);

  const sphere = useControls("sphere", {
    widthSegments: { value: 16, min: 4, max: 64, step: 1 },
    heightSegments: { value: 16, min: 4, max: 64, step: 1 },
  });

  return (
    <Box ref={mesh} position={[-5, 1.5, 0]}>
      <sphereGeometry args={[1, sphere.widthSegments, sphere.heightSegments]} />
      <meshBasicMaterial wireframe color="cyan" />
    </Box>
  );
}
export default SphereWireFrame;
