import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeSubAlbumApi } from "../services/albumService";
import toast from "react-hot-toast";

export default function useDeleteSubAlbum() {
  const queryClient = useQueryClient();

  const { isPending: isRemoving, mutate: deleteSubAlbum } = useMutation({
    mutationFn: removeSubAlbumApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["single-sub-album"],
      });
    },
    onError: (error) => toast.error(error?.response?.data?.message || error.message)
  });

  return { isRemoving, deleteSubAlbum };
}
