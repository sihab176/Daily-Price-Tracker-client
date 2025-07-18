import React from "react";

import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import LoadingComponent from "../component/Loading/LoadingComponent";

const PrivetRoute = ({ children }) => {
  const { loader, user } = useAuth();

  const location = useLocation();

  if (loader) {
    return <LoadingComponent />;
  }
  if (!user) {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
  return <div>{children}</div>;
};

export default PrivetRoute;
