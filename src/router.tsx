import { createBrowserRouter } from "react-router-dom";
import paths from "./path";
import Layout from "./Layout";
import RootPage from "@/root/Page";
import PrimerPage from "@/primer/Page";

const routerInfo = [
  {
    path: paths.root,
    element: <RootPage />,
  },
  {
    path: paths.primer,
    element: <PrimerPage />,
  },
];

const RouterObject = createBrowserRouter(
  routerInfo.map((router) => ({
    path: router.path,
    element: <Layout>{router.element}</Layout>,
  }))
);

export default RouterObject;
