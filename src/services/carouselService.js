import http from "./httpService";

export default function getCarouselImagesApi() {
  return http.get("/images").then(({ data }) => data.data);
}
