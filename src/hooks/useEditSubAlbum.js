import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editSubAlbumApi } from "../services/subAlbumService";
import toast from "react-hot-toast";

export default function useEditSubAlbum() {
  const queryClient = useQueryClient();

  const { isPending: isEditing, mutate: editSubAlbum } = useMutation({
    mutationFn: editSubAlbumApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["single-sub-album"],
      });
    },

    onError: (error) =>
      toast.error(error?.response?.data?.message || error.message),
  });

  return { isEditing, editSubAlbum };
}
