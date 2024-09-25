import { useControls } from "leva";
import { initialCamera } from "../constants/cameraData";

function AxesHelper() {
  const isAxesVisible = useControls("Axes Helper", {
    visible: true,
  });

  return isAxesVisible.visible ? (
    <axesHelper args={[initialCamera.far]} position={[0, 0, 0]} />
  ) : null;
}

export default AxesHelper;
