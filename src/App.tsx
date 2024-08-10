import { RouterProvider } from "react-router-dom";
import "@/common.css";
import routerInfo from "./router";

function App() {
  return <RouterProvider router={routerInfo} />;
}

export default App;
