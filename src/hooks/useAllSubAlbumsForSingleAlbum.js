import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getAllSubAlbumsForSingleAlbumApi } from "../services/albumService";

export default function useAllSubAlbums() {
  const { id : albumId } = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["all-subAlbums-single-album", albumId],
    queryFn: () => getAllSubAlbumsForSingleAlbumApi(albumId),
    retry: 1,
    enabled: !!albumId,
  });

  const { subAlbums } = data || {};

  return { subAlbums, isLoading, isError, error };
}
