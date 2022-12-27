import { createBrowserRouter } from "react-router-dom";

import Home from "../components/Home";
import Main from "../layout/Main";

export const routes = createBrowserRouter([
  {
    path: "/",
    component: <Main />,
    children: [{ path: "/", component: <Home /> }],
  },
]);
