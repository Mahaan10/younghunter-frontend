import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAlbumApi } from "../services/albumService";
import toast from "react-hot-toast";

export default function useCreateAlbum() {
  const queryClient = useQueryClient();

  const { isPending: isCreating, mutate: createAlbum } = useMutation({
    mutationFn: createAlbumApi,
    onSuccess: (data) => {
      toast.success(data.message);

      queryClient.invalidateQueries({
        queryKey: ["albums"],
      });
    },

    onError: (error) => toast.error(error.response.data.message),
  });

  return { isCreating, createAlbum };
}
