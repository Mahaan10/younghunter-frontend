import { useMutation } from "@tanstack/react-query";
import { getLoggedInApi } from "../services/userService";
import toast from "react-hot-toast";

export default function useAuth() {
  const { isPending: isLoggedIn, mutate: getLoggedIn } = useMutation({
    mutationFn: getLoggedInApi,
    onSuccess: (data) => {
      console.log(data)
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.data.role);
      window.location.reload();
    },
    onError: (error) => toast.error(error?.response?.data?.message),
  });
  return { isLoggedIn, getLoggedIn };
}

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  window.location.reload();
};
