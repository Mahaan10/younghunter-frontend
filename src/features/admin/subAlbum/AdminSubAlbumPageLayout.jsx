import { Outlet, useParams } from "react-router-dom";
import useAlbums from "../../../hooks/useAlbums";
import SubAlbumsHeader from "./SubAlbumHeader";
import SubAlbumsTable from "./SubAlbumsTable";

function AdminSubAlbumPageLayout() {
  const { albums } = useAlbums();
  const { id } = useParams();
  const album = albums?.find((album) => album._id === id);

  return (
    <>
      <SubAlbumsHeader album={album} />
      <SubAlbumsTable album={album} />
      <Outlet />
    </>
  );
}

export default AdminSubAlbumPageLayout;
