import http from "./httpService";

export default function getUsers() {
  return http.get("/users").then(({ data }) => data.data);
}

export function getLoggedInApi(data) {
  return http.post("/users/login", data).then(({ data }) => data.data);
}
