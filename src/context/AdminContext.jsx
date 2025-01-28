import { createContext, useContext } from "react";
import useUsers from "../hooks/useUsers";

const AdminContext = createContext();

export default function AdminProvider({ children }) {
  const { users } = useUsers();
  //const [user, setUser] = useState(null)
  const isAdmin = users[0].role === "admin";
  //const isAdmin = user?.role === "admin";
  //add user and setUser in value!
  return (
    <AdminContext.Provider value={{ isAdmin }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  return context;
}
