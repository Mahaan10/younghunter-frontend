import { useParams } from "react-router-dom"
import useSingleAlbum from "../../hooks/useSingleAlbum"
import Loading from "../../ui/Loading"

function SingleAlbum() {
  const {id} = useParams()
  const {isError, isLoading, singleAlbum} = useSingleAlbum()
  console.log(id)
  if(isLoading) return <Loading/>
  if(isError) return <div>Error</div>
  console.log(singleAlbum)
  return (
    <div>SingleAlbum</div>
  )
}

export default SingleAlbum
