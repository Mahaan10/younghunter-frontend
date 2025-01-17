import { useQuery } from "@tanstack/react-query";
import getAlbumApi from "../services/albumService";

export default function useAlbums() {
  const { data, isLoading } = useQuery({
    queryKey: ["albums"],
    queryFn: getAlbumApi,
  });

  const { albums } = data || {};
  return { albums, isLoading };
}
