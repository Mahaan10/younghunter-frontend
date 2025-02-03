import http from "./httpService";

export default function getAlbumsApi() {
  return http.get("/albums").then(({ data }) => data.data);
}

export function getAllSubAlbumsForSingleAlbumApi(albumId) {
  return http.get(`/albums/${albumId}/sub-albums`).then(({ data }) => data.data);
}

export function getSingleSubAlbumApi(albumId, subAlbumId) {
  return http
    .get(`/albums/${albumId}/sub-albums/${subAlbumId}`)
    .then(({ data }) => data.data);
}

export function createAlbumApi(data) {
  return http.post("/albums", data).then(({ data }) => data.data);
}

export function editAlbumApi({ id, newAlbum }) {
  return http.patch(`/albums/${id}`, newAlbum).then(({ data }) => data.data);
}

export function removeAlbumApi(albumId) {
  return http.delete(`/albums/${albumId}`).then(({ data }) => data.data);
}

export function removeSubAlbumApi({ albumId, subAlbumId }) {
  return http
    .delete(`/albums/${albumId}/sub-albums/${subAlbumId}`)
    .then(({ data }) => data.data);
}

export function createSubAlbumApi(albumId) {
  return http.post(`/albums/${albumId}/sub-albums`).then(({ data }) => data.data)
}

export function editSubAlbumApi({ albumId, subAlbumId, newSubAlbum }) {
  console.log(newSubAlbum)
  return http.patch(`/albums/${albumId.id}/sub-albums/${subAlbumId}`, newSubAlbum).then(({ data }) => data.data)
}