import { Navigate, Outlet } from "react-router-dom";
import { useAdmin } from "../context/useAdminContext";

function ProtectedRoutes({ children }) {
  const { isAdmin, loading } = useAdmin();

  if (loading) return <div>...</div>;
  if (!isAdmin) return <Navigate to="/" replace />;
  return children ? children : <Outlet />;
}

export default ProtectedRoutes;
