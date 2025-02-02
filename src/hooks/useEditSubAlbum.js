import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editSubAlbumApi } from "../services/albumService";
import toast from "react-hot-toast";

export default function useEditSubAlbum() {
  const queryClient = useQueryClient();

  const { isPending: isEditing, mutate: editSubAlbum } = useMutation({
    mutationFn: editSubAlbumApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["sub-albums"],
      });
    },

    onError: (error) => toast.error(error?.response?.data?.message),
  });

  return { isEditing, editSubAlbum };
}
