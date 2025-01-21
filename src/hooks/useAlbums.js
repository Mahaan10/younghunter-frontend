import { useQuery } from "@tanstack/react-query";
import getAlbumsApi from "../services/albumService";

export default function useAlbums() {
  const { data, isLoading } = useQuery({
    queryKey: ["albums"],
    queryFn: getAlbumsApi,
  });

  const { albums } = data || {};
  return { albums, isLoading };
}