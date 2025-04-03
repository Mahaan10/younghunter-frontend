import Cookies from "js-cookie";

export const getRoleFromCookies = () => {
  return Cookies.get("role");
};

export const setAuthCookies = (token, role) => {
  Cookies.set("token", token, {
    expires: 90,
    secure: true,
    sameSite: "Strict",
  });
  Cookies.set("role", role, {
    expires: 90,
    secure: true,
    sameSite: "Strict",
  });
};

export const clearAuthCookies = () => {
  Cookies.remove("token");
  Cookies.remove("role");
};
