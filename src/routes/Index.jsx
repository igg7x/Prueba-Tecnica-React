import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../views/Home/Index";
import Detail from "../views/Detail/Index";
import Error404 from "../views/Errors/Index";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error404 />,
  },
  {
    path: "/detail/:movieId",
    element: <Detail />,
    errorElement: <Error404 />,
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
