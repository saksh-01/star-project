import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { isAuthenticated } from "../auth/auth";

const RequireAuth = ({ children }) => {
  const authed = isAuthenticated();
  const location = useLocation();
  console.log(authed);

  return authed === true ? (
    children
  ) : (
    <Navigate to="/" replace state={{ path: location.pathname }} />
  );
};

export default RequireAuth;
