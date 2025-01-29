import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editAlbumApi } from "../services/albumService";
import toast from "react-hot-toast";

export default function useEditAlbum() {
  const queryClient = useQueryClient();

  const { isPending: isEditing, mutate: editAlbum } = useMutation({
    mutationFn: editAlbumApi,
    onSuccess: (data) => {
      toast.success(data.message);

      queryClient.invalidateQueries({
        queryKey: ["single-album"],
      });
    },

    onError: (error) => toast.error(error?.response?.data?.message),
  });

  return { isEditing, editAlbum };
}
