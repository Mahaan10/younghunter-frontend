import { Outlet, useNavigate } from "react-router-dom";
import { useAdmin } from "../context/AdminContext";

function ProtectedRoute() {
  const { isAdmin } = useAdmin();
  const navigate = useNavigate();

  if (!isAdmin) return navigate("/");

  return <Outlet />;
}

export default ProtectedRoute;
