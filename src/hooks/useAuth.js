import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../services/userService";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { useLanguage } from "../context/useLanguageContext";

export default function useAuth() {
  const { language } = useLanguage();
  const { isPending: isLoggedIn, mutate: getLoggedIn } = useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      Cookies.set("jwt", data.token);
      Cookies.set("role", data.data.user.role);
      toast.success(
        `${
          language === "en"
            ? `Welcome ${data.data.user.name}`
            : `${data.data.user.name}، خوش آمدید!`
        }`
      );
    },
    onError: (error) => toast.error(error?.response?.data?.message),
  });
  return { isLoggedIn, getLoggedIn };
}

export const logout = () => {
  Cookies.remove("token");
  Cookies.remove("role");
  window.location.reload();
};
