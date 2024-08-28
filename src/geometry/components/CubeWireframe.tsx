import { useRef } from "react";
import { Mesh } from "three";
import { Box } from "@react-three/drei";
import { useControls } from "leva";

function CubeWireframe(): JSX.Element {
  const mesh = useRef<Mesh>(null!);

  const cube = useControls("cube", {
    widthSegments: { value: 8, min: 4, max: 32, step: 1 },
    heightSegments: { value: 8, min: 4, max: 32, step: 1 },
    depthSegments: { value: 8, min: 4, max: 32, step: 1 },
  });

  return (
    <Box ref={mesh} position={[5, 1.5, 0]}>
      <boxGeometry
        args={[
          2,
          2,
          2,
          cube.widthSegments,
          cube.heightSegments,
          cube.depthSegments,
        ]}
      />
      <meshBasicMaterial wireframe color="magenta" />
    </Box>
  );
}
export default CubeWireframe;
