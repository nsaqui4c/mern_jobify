import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = true;

  if (user) {
    return children;
  } else {
    return <Navigate to="/landing" />;
  }
};

export default ProtectedRoute;
