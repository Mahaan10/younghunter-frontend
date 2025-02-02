import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createSubAlbumApi } from "../services/albumService";

export default function useCreateSubAlbums() {
    const queryClient = useQueryClient()

    const {isPending: isCreating, mutate: createSubAlbum} = useMutation({
        mutationFn: createSubAlbumApi,
        onSuccess: () => {
            queryClient.invalidateQueries({
              queryKey: ["single-sub-album"],
            });
          },
      
          onError: (error) => toast.error(error?.response?.data?.message),
    })

    return {isCreating, createSubAlbum}
}