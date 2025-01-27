import { useQuery } from "@tanstack/react-query";
import getUsers from "../services/userService";

export default function useUsers() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  const { data: users } = data || {};

  return { users, isLoading, isError, error };
}
