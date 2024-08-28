import { useRef } from "react";
import { Mesh } from "three";
import { Box } from "@react-three/drei";
import { useControls } from "leva";

function MeshPhongMaterial(): JSX.Element {
  const mesh = useRef<Mesh>(null!);

  const meshPhong = useControls("meshPhong", {
    color: "skyblue",
    shininess: { value: 150, min: 0, max: 300, step: 1 },
  });

  return (
    <Box ref={mesh} position={[2, 1.5, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshPhongMaterial
        color={meshPhong.color}
        shininess={meshPhong.shininess}
      />
    </Box>
  );
}
export default MeshPhongMaterial;
