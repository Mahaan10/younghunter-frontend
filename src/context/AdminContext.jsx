import { createContext, useContext, useState } from "react";

const AdminContext = createContext();

export default function AdminProvider({ children }) {
  const [user, setUser] = useState(null);
  const isAdmin = user?.role === "admin";

  return (
    <AdminContext.Provider value={{ user, isAdmin, setUser }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  return context;
}
