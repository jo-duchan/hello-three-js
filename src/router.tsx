import { createBrowserRouter } from "react-router-dom";
import paths from "./path";
import Layout from "./Layout";
import RootPage from "@/root/Page";
import PrimerPage from "@/primer/Page";
import CameraPage from "@/camera/Page";
import LightPage from "@/light/Page";
import GeometryPage from "@/geometry/Page";

const routerInfo = [
  {
    path: paths.root.path,
    element: <RootPage />,
  },
  {
    path: paths.primer.path,
    element: <PrimerPage />,
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
];

const RouterObject = createBrowserRouter(
  routerInfo.map((router) => ({
    path: router.path,
    element: <Layout>{router.element}</Layout>,
  })),
  {
    basename: "/hello-three-js/",
  }
);

export default RouterObject;
