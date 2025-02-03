import http from "./httpService";

export default function getImagesApi() {
  return http.get("/images").then(({ data }) => data.data);
}
