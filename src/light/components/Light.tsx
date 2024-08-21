import * as THREE from "three";
import { useRef } from "react";
import {
  DirectionalLight,
  DirectionalLightHelper,
  PointLight,
  PointLightHelper,
  SpotLight,
  SpotLightHelper,
  RectAreaLight,
} from "three";
import { useHelper } from "@react-three/drei";
import { useControls } from "leva";
import { RectAreaLightHelper } from "three/addons/helpers/RectAreaLightHelper.js";

function Light(): JSX.Element {
  const directionalRef = useRef<DirectionalLight>(null!);
  const pointRef = useRef<PointLight>(null!);
  const spotRef = useRef<SpotLight>(null!);
  const rectAreaRef = useRef<RectAreaLight>(null!);

  const ambient = useControls("ambient", {
    active: true,
    color: "#fff",
    intensity: { value: 1, min: 0, max: 5, step: 0.1 },
  });

  const hemisphere = useControls("hemisphere", {
    active: false,
    skyColor: "#B1E1FF",
    groundColor: "#B97A20",
    intensity: { value: 1, min: 0, max: 5, step: 0.1 },
  });

  const directional = useControls("directional", {
    active: false,
    x: { value: -5, min: -10, max: 10, step: 0.1 },
    y: { value: 5, min: 0, max: 10, step: 0.1 },
    z: { value: 0, min: -10, max: 10, step: 0.1 },
    intensity: { value: 5, min: 0, max: 5, step: 0.1 },
  });

  useHelper(directional.active && directionalRef, DirectionalLightHelper);

  const point = useControls("point", {
    active: false,
    x: { value: 0, min: -10, max: 10, step: 0.1 },
    y: { value: 5, min: 0, max: 10, step: 0.1 },
    z: { value: 0, min: -10, max: 10, step: 0.1 },
    intensity: { value: 50, min: 0, max: 250, step: 0.1 },
    distance: { value: 20, min: 0, max: 40, step: 0.1 },
  });

  useHelper(point.active && pointRef, PointLightHelper);

  const spot = useControls("spot", {
    active: false,
    color: "#fff",
    intensity: { value: 150, min: 0, max: 250, step: 0.1 },
    distance: { value: 0, min: 0, max: 40, step: 0.1 },
    angle: { value: 60, min: 0, max: 90, step: 0.1 },
    penumbra: { value: 0, min: 0, max: 1, step: 0.1 },
    x: { value: 0, min: -10, max: 10, step: 0.1 },
    y: { value: 10, min: 0, max: 10, step: 0.1 },
    z: { value: 0, min: -10, max: 10, step: 0.1 },
  });

  useHelper(spot.active && spotRef, SpotLightHelper);

  const rectArea = useControls("rectArea", {
    active: false,
    color: "#fff",
    intensity: { value: 5, min: 0, max: 10, step: 0.1 },
    width: { value: 12, min: 0, max: 20, step: 0.1 },
    height: { value: 4, min: 0, max: 20, step: 0.1 },
    "rotation-x": { value: -90, min: -180, max: 180, step: 0.1 },
    "rotation-y": { value: 0, min: -180, max: 180, step: 0.1 },
    "rotation-z": { value: 0, min: -180, max: 180, step: 0.1 },
    x: { value: 0, min: -10, max: 10, step: 0.1 },
    y: { value: 7, min: 0, max: 10, step: 0.1 },
    z: { value: 0, min: -10, max: 10, step: 0.1 },
  });

  useHelper(
    rectArea.active && rectAreaRef,
    RectAreaLightHelper
  ).current?.rotateX(0);

  return (
    <>
      {ambient.active && (
        <ambientLight color={ambient.color} intensity={ambient.intensity} />
      )}
      {hemisphere.active && (
        <hemisphereLight
          args={[
            hemisphere.skyColor,
            hemisphere.groundColor,
            hemisphere.intensity,
          ]}
        />
      )}
      {directional.active && (
        <directionalLight
          ref={directionalRef}
          intensity={directional.intensity}
          position={[directional.x, directional.y, directional.z]}
          target-position={[0, 1.5, 0]}
        />
      )}
      {point.active && (
        <pointLight
          ref={pointRef}
          intensity={point.intensity}
          distance={point.distance}
          position={[point.x, point.y, point.z]}
        />
      )}
      {spot && (
        <spotLight
          ref={spotRef}
          color={spot.color}
          intensity={spot.intensity}
          distance={spot.distance}
          angle={spot.angle}
          penumbra={spot.penumbra}
          position={[spot.x, spot.y, spot.z]}
          target-position={[-5, 0, 0]}
        />
      )}
      {rectArea && (
        <rectAreaLight
          ref={rectAreaRef}
          color={rectArea.color}
          intensity={rectArea.intensity}
          width={rectArea.width}
          height={rectArea.height}
          position={[rectArea.x, rectArea.y, rectArea.z]}
          rotation-x={THREE.MathUtils.degToRad(rectArea["rotation-x"])}
          rotation-y={THREE.MathUtils.degToRad(rectArea["rotation-y"])}
          rotation-z={THREE.MathUtils.degToRad(rectArea["rotation-z"])}
        />
      )}
    </>
  );
}
export default Light;
