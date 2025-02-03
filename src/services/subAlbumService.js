import http from "./httpService";

export function removeSubAlbumApi({ albumId, subAlbumId }) {
  return http
    .delete(`/albums/${albumId}/sub-albums/${subAlbumId}`)
    .then(({ data }) => data.data);
}

export function createSubAlbumApi({ albumId, newSubAlbum }) {
  return http
    .post(`/albums/${albumId}/sub-albums`, newSubAlbum)
    .then(({ data }) => data.data);
}

export function editSubAlbumApi({ albumId, subAlbumId, newSubAlbum }) {
  return http
    .patch(`/albums/${albumId}/sub-albums/${subAlbumId}`, newSubAlbum)
    .then(({ data }) => data.data);
}