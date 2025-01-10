import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import PropTypes from "prop-types";
import  AuthContext  from "./AuthContext";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex min-h-[calc(100vh-64px)] justify-center">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }

if (!loading && !user) {
  return <Navigate state={location.pathname} to="/login" />;
}
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
