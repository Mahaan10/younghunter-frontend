import http from "./httpService";

export default function getAlbumsApi() {
  return http.get("/albums").then(({ data }) => data.data);
}

export function getSingleAlbumApi(id) {
  return http.get(`/albums/${id}`).then(({ data }) => data.data);
}
