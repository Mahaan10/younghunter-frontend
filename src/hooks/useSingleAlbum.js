import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getSingleAlbumApi } from "../services/albumService";

export default function useSingleAlbum() {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["single-album", id],
    queryFn: () => getSingleAlbumApi(id),
    retry: false,
  });

  const { singleAlbum } = data || {};
  return { singleAlbum, isLoading, isError };
}
