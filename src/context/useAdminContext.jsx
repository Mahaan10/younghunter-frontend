import { createContext, useContext, useState } from "react";
import useUsers from "../hooks/useUsers";

const AdminContext = createContext();

export default function AdminProvider({ children }) {
  const { isError, error, isLoading, users } = useUsers();
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <AdminContext.Provider
      value={{ isAdmin, isLoading, isError, error, users, setIsAdmin }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  return context;
}
