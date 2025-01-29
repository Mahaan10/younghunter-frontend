import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeAlbumApi } from "../services/albumService";
import toast from "react-hot-toast";

export default function useDeleteAlbum() {
  const queryClient = useQueryClient();

  const { isPending: isRemoving, mutate: deleteAlbum } = useMutation({
    mutationFn: removeAlbumApi,
    onSuccess: (data) => {
      toast.success(data.message);

      queryClient.invalidateQueries({
        queryKey: ["single-album"],
      });
    },
    onError: (error) => toast.error(error?.response?.data?.message),
  });

  return { isRemoving, deleteAlbum };
}
