import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getSingleSubAlbumApi } from "../services/albumService";

export default function useSingleAlbum() {
  const { id } = useParams();
console.log(id)
  const { data, isLoading, isError } = useQuery({
    queryKey: ["single-sub-album", id],
    queryFn: () => getSingleSubAlbumApi(id),
    retry: 1,
    enabled: !!id,
  });


console.log(data)
  //const { album } = data || {};

  return { data, isLoading, isError };
}
