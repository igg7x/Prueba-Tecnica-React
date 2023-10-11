import React from "react";
import { useRouteError } from "react-router-dom";
const Error404 = () => {
  const error = useRouteError();
  return (
    <>
      <h3>Not Found {error.status}</h3>
      <p>{error.data}</p>
    </>
  );
};

export default Error404;
