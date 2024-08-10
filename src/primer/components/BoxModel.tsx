import { useRef } from "react";
import { Mesh } from "three";
import { Box } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function BoxModel(): JSX.Element {
  const mesh = useRef<Mesh>(null!);

  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <Box ref={mesh}>
      <boxGeometry />
      <meshStandardMaterial color={0x00ff00} />
    </Box>
  );
}
export default BoxModel;
