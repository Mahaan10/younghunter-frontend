import { Navigate, Outlet } from "react-router-dom";
import { useAdmin } from "../context/useAdminContext";

function ProtectedRoutes({ children }) {
  const { isAdmin } = useAdmin();

  if (!isAdmin) return <Navigate to="/" replace />;
  return children ? children : <Outlet />;
}

export default ProtectedRoutes;
