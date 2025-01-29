import axios from "axios";

const BASE_URL = "/api/v1";

const app = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

app.interceptors.request.use(
  (res) => res,
  (error) => Promise.reject(error)
);
app.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalConfig = error.config;

    if (error.response.status === 401 && !originalConfig._retry) {
      originalConfig._retry = true;
      try {
        const { data } = await axios.get(`${BASE_URL}/users/login`, {
          withCredentials: true,
        });

        if (data) return app(originalConfig);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

const http = {
  get: app.get,
  post: app.post,
  remove: app.delete,
  put: app.put,
  patch: app.patch,
};

export default http;
