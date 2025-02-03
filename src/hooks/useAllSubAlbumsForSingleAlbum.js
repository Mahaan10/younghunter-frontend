import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getAllSubAlbumsForSingleAlbumApi } from "../services/albumService";

export default function useAllSubAlbums() {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["all-subAlbums-single-album", id],
    queryFn: () => getAllSubAlbumsForSingleAlbumApi(id),
    retry: 1,
    enabled: !!id,
  });

  const { subAlbums } = data || {};

  return { subAlbums, isLoading, isError, error };
}
