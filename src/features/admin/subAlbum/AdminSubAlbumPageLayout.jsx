import { useOutletContext, useParams } from "react-router-dom";
import SubAlbumsHeader from "./SubAlbumHeader";
import SubAlbumsTable from "./SubAlbumsTable";

function AdminSubAlbumPageLayout() {
  const { id } = useParams();
  const { albums } = useOutletContext();
  const album = albums?.find((album) => album._id === id);

  if (!album) return <p>There is No SubAlbum</p>;

  return (
    <>
      <SubAlbumsHeader album={album} />
      <SubAlbumsTable album={album} />
    </>
  );
}

export default AdminSubAlbumPageLayout;
