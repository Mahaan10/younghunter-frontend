// ProtectedRoute.jsx
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAdmin } from "../context/useAdminContext";
import { getRoleFromCookies } from "../utils/authUtils";

function ProtectedRoute({ children }) {
  const { setAdmin, loading, setLoading } = useAdmin();
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    const role = getRoleFromCookies();
    setIsAdmin(role === "admin");
    setAdmin(role === "admin");
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (isAdmin === false) {
    return <Navigate to="/" replace />;
  }

  return children ? children : <Outlet />;
}

export default ProtectedRoute;
