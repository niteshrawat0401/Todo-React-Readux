import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Authcontext } from "../context/AuthContext";

const RequiredAuth = ({ children }) => {
  const { token } = useContext(Authcontext);
  const location = useLocation();

  // if children is there
  if (token) return children;
  return <Navigate to="/login" state={{ from: location }} replace />
 
};

export default RequiredAuth;
