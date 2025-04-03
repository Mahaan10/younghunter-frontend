import { createContext, useContext, useState } from "react";

const AdminContext = createContext();

export default function AdminProvider({ children }) {
  const [loading, setLoading] = useState(true);

  const setAdmin = () => {
    setLoading(false);
  };

  return (
    <AdminContext.Provider value={{ setLoading, setAdmin, loading }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  return context;
}
