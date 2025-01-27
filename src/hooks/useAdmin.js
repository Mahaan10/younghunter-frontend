import { useState } from "react";
import useUsers from "./useUsers";

export default function useAdmin() {
  const {users, isLoading} = useUsers()
  const [isAdmin, setIsAdmin] = useState(false)
  
}