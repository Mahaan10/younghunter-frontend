import axios from "axios";

const BASE_URL = "/api/v1";

const app = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

/* app.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return token;
  },
  (error) => Promise.reject(error)
); */

const http = {
  get: app.get,
  post: app.post,
  remove: app.delete,
  put: app.put,
  patch: app.patch,
};

export default http;
