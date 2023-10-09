import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../views/Home/Index";
import Detail from "../views/Detail/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/detail",
    element: <Detail />,
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
