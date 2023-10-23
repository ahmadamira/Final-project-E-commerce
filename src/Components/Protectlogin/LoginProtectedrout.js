import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../../Context/Authcontext";

const LoginProtectedrout = ({ children }) => {
  const { user } = UserAuth();

  if (user && Object.keys(user).length !== 0) {
    return <Navigate to="/" replace={true} />;
  }

  return children;
};

export default LoginProtectedrout;
