import http from "./httpService";

export default function getAlbumsApi() {
  return http.get("/albums").then(({ data }) => data.data);
}

export function getSingleAlbumApi(albumId) {
  return http.get(`/albums/${albumId}`).then(({ data }) => data.data);
}

export function getSingleSubAlbumApi(albumId, subAlbumId) {
  return http
    .get(`/albums/${albumId}/sub-albums/${subAlbumId}`)
    .then(({ data }) => data.data);
}

export function createAlbumApi(data) {
  return http.post("/albums", data).then(({ data }) => data.data);
}
