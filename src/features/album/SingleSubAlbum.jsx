import useSingleAlbum from "../../hooks/useSingleSubAlbum"

function SingleSubAlbum() {
  const {data,isError,isLoading} = useSingleAlbum()
  return (
    <div>SingleSubAlbum</div>
  )
}

export default SingleSubAlbum