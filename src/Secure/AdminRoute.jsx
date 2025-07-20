import React from "react";
import { Navigate } from "react-router";
import useAuth from "../hooks/useAuth";
import useUserRole from "../hooks/useUserRole";
import LoadingComponent from "../component/Loading/LoadingComponent";

const AdminRoute = ({ children }) => {
  const { user, loader } = useAuth();
  const { role, roleLoading } = useUserRole();

  if (loader || roleLoading) {
    return <LoadingComponent />;
  }
  if (!user || role !== "Admin") {
    return <Navigate state={location.pathname} to="/forbidden"></Navigate>;
  }
  return children;
};

export default AdminRoute;
