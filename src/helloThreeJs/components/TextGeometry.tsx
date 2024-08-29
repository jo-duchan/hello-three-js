import { useRef, useMemo } from "react";
import { Mesh } from "three";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { Box } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";

function BoxModel(): JSX.Element {
  const mesh = useRef<Mesh>(null!);
  const font = useLoader(FontLoader, "assets/fonts/Rubik Bubbles_Regular.json");

  const textGeometry = useMemo(() => {
    if (!font) return null;

    const textOptions = {
      font,
      size: 1,
      height: 0.2,
    };

    const geometry = new TextGeometry("Hello Three.js", textOptions);

    // 텍스트의 bounding box를 계산합니다.
    geometry.computeBoundingBox();
    const boundingBox = geometry.boundingBox;

    if (boundingBox) {
      // 텍스트 너비를 계산하고, 절반만큼 이동시킵니다.
      const centerOffsetX = (boundingBox.max.x - boundingBox.min.x) / 2;
      const centerOffsetY = (boundingBox.max.y - boundingBox.min.y) / 2;

      geometry.translate(-centerOffsetX, -centerOffsetY, 0);
    }

    return geometry;
  }, [font]);

  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.005;
  });

  return (
    <Box ref={mesh} position={[-1, 5, 0]}>
      {textGeometry && <primitive object={textGeometry} />}
      <meshStandardMaterial color={0xffffff} metalness={0.8} roughness={0.4} />
    </Box>
  );
}
export default BoxModel;
