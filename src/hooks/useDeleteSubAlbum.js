import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeSubAlbumApi } from "../services/albumService";
import toast from "react-hot-toast";

export default function useDeleteSubAlbum() {
  const queryClient = useQueryClient();

  const { isPending: isRemoving, mutate: deleteSubAlbum } = useMutation({
    mutationFn: removeSubAlbumApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["all-subAlbums-single-album"],
      });
    },
    onError: (error) => toast.error(error?.response?.data?.message || error.message),
    onMutate: async ({ albumId, subAlbumId }) => {
      await queryClient.cancelQueries({ queryKey: ["all-subAlbums-single-album", albumId] })

      const prevData = queryClient.getQueryData(["all-subAlbums-single-album", albumId])

      queryClient.setQueryData(["all-subAlbums-single-album", albumId], (oldData) => {
        if (!oldData) return oldData
        return {
          ...oldData,
          subAlbums: oldData.subAlbums.filter((subAlbum) => subAlbum._id !== subAlbumId)
        }
      })
      return { prevData }
    },
    onError: (error, _, context) => {
      if (context?.prevData) {
        queryClient.setQueryData(["all-subAlbums-single-album", context.prevData])
      }
      toast.error(error?.response?.data?.message || error.message)
    },
    onSettled: (data, error, { albumId }) => {
      queryClient.invalidateQueries({ queryKey: ["all-subAlbums-single-album", albumId] })
    }
  }); 

  return { isRemoving, deleteSubAlbum };
}
