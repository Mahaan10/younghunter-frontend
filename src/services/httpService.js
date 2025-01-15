import axios from "axios";

const BASE_URL = "/api/v1";

const app = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

const http = {
  get: app.get,
  post: app.post,
  remove: app.delete,
  put: app.put,
  patch: app.patch,
};

export default http;
