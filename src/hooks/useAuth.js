import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../services/userService";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { useLanguage } from "../context/useLanguageContext";
import { useNavigate } from "react-router-dom";
import { useAdmin } from "../context/useAdminContext";
import { clearAuthCookies, setAuthCookies } from "../utils/authUtils";

export default function useAuth() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const { setAdmin } = useAdmin();

  const { isPending: isLoggedIn, mutate: getLoggedIn } = useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      setAuthCookies(data.token, data.data.user.role);
      setAdmin(data.data.user.role);
      navigate(data.data.user.role === "admin" ? "/admin" : "/");
    },
    onError: (error) =>
      toast.error(
        error?.response?.data?.message ||
          error.message ||
          "Something went wrong, please try again later!"
      ),
  });
  return { isLoggedIn, getLoggedIn };
}

export const logout = () => {
  const navigate = useNavigate();
  return () => {
    clearAuthCookies();
    navigate("/");
  };
};
