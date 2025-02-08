import http from "./httpService";

export default function getImagesApi() {
  return http.get("/images").then(({ data }) => data.data);
}

export function createImageApi(newImage) {
  return http.post("/images", newImage).then(({ data }) => data.data);
}
