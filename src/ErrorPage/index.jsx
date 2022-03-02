import React from "react";
import { useLocation } from "react-router-dom";
const ErrorPage = () => {
  let location = useLocation();
  return (
    <>
      <h1 style={{ fontSize: "30px" }}>
        sorry, about that, the page {location.pathname} doesn't exist!
      </h1>
    </>
  );
};
export default ErrorPage;
