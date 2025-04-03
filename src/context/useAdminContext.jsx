import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { getRoleFromCookies } from "../utils/authUtils";

const AdminContext = createContext();

export default function AdminProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const role = getRoleFromCookies();
    setIsAdmin(role === "admin");
    setLoading(false);
  }, []);

  const setAdmin = (value) => {
    setIsAdmin(value);
  };

  return (
    <AdminContext.Provider value={{ isAdmin, setAdmin, loading }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  return context;
}
