import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const AdminContext = createContext();

export default function AdminProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const role = Cookies.get("role");
    if (role === "admin") setIsAdmin(true);
  }, []);

  const setAdmin = (value) => {
    setIsAdmin(value);
  };

  return (
    <AdminContext.Provider value={{ isAdmin, setAdmin }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  return context;
}
