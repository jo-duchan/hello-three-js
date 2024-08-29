import { createHashRouter } from "react-router-dom";
import paths from "./path";
import Layout from "./Layout";
import RootPage from "@/root/Page";
import HelloThreeJsPage from "@/helloThreeJs/Page";
import CameraPage from "@/camera/Page";
import LightPage from "@/light/Page";
import GeometryPage from "@/geometry/Page";
import MaterialPage from "@/material/Page";

const routerInfo = [
  {
    path: paths.root.path,
    element: <RootPage />,
  },
  {
    path: paths.helloThreeJs.path,
    element: <HelloThreeJsPage />,
  },
  {
    path: paths.camera.path,
    element: <CameraPage />,
  },
  {
    path: paths.light.path,
    element: <LightPage />,
  },
  {
    path: paths.geometry.path,
    element: <GeometryPage />,
  },
  {
    path: paths.material.path,
    element: <MaterialPage />,
  },
];

const RouterObject = createHashRouter(
  routerInfo.map((router) => ({
    path: router.path,
    element: <Layout>{router.element}</Layout>,
  }))
);

export default RouterObject;
