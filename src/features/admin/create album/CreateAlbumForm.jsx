import useCreateAlbum from "../../../hooks/useCreateAlbum"

function CreateAlbumForm() {
  const {createAlbum, isCreating} = useCreateAlbum()
  return (
    <div>CreateAlbumForm</div>
  )
}

export default CreateAlbumForm