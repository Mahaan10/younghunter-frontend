import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getSingleAlbumApi } from "../services/albumService";

export default function useSingleAlbum() {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["single-album", id],
    queryFn: () => getSingleAlbumApi(id),
    retry: 1,
    enabled: !!id,
  });

  const {album} = data || {};

  return { album, isLoading, isError };
}
