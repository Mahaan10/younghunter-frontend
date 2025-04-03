import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../services/userService";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { useLanguage } from "../context/useLanguageContext";
import { useNavigate } from "react-router-dom";
import { useAdmin } from "../context/useAdminContext";

export default function useAuth() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const { setAdmin } = useAdmin();

  const { isPending: isLoggedIn, mutate: getLoggedIn } = useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      Cookies.set("token", data.token, {
        expires: 90,
        secure: true,
        sameSite: "Strict",
      });
      Cookies.set("role", data.data.user.role, {
        expires: 90,
        secure: true,
        sameSite: "Strict",
      });
      if (data.data.user.role === "admin") {
        setAdmin(true);
        navigate("/admin");
      } else {
        navigate("/");
      }

      toast.success(
        `${
          language === "en"
            ? `Welcome ${data.data.user.name}`
            : `${data.data.user.name}، خوش آمدید!`
        }`
      );
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
  Cookies.remove("token");
  Cookies.remove("role");
  navigate("/");
};
