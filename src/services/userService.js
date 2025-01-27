import http from "./httpService";

export default function getUsers() {
  return http.get("/users").then(({ data }) => data.data);
}
