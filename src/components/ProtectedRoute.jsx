import {
  Navigate,
} from "react-router-dom";

import {
  isAuthenticated,
} from "../utils/auth";

import LoadingSpinner from "./LoadingSpinner";

const ProtectedRoute = ({
  children,
}) => {

  if (
    isAuthenticated() ===
    null
  ) {

    return (
      <LoadingSpinner />
    );
  }

  if (
    !isAuthenticated()
  ) {

    return (
      <Navigate
        to="/login"
      />
    );
  }

  return children;
};

export default ProtectedRoute;