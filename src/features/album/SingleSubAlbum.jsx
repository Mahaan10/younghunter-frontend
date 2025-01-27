import useSingleAlbum from "../../hooks/useSingleSubAlbum"

function SingleSubAlbum() {
  const {subAlbum,isError,isLoading} = useSingleAlbum()
  return (
    <div>SingleSubAlbum</div>
  )
}

export default SingleSubAlbum