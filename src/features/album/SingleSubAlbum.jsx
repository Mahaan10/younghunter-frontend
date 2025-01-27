import toast from "react-hot-toast";
import useSingleSubAlbum from "../../hooks/useSingleSubAlbum";
import Loading from "../../ui/Loading";

function SingleSubAlbum() {
  const { data, error, isError, isLoading } = useSingleSubAlbum();

  if (isLoading) return <Loading />;
  if (isError) return toast.error(error.response.data.message);

  return <div>SingleSubAlbum</div>;
}

export default SingleSubAlbum;
