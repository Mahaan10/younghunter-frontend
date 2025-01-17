import http from "./httpService";

export default function getAlbumApi() {
  return http.get("/albums").then(({ data }) => data.data);
}
