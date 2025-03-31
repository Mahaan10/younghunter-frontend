import SubAlbumsHeader from "./SubAlbumHeader";
import SubAlbumsTable from "./SubAlbumsTable";

function AdminSubAlbumPageLayout({ albums, albumId }) {
  const album = albums?.find((album) => album._id === albumId);

  if (!album) return <p>There is No SubAlbum</p>;

  return (
    <>
      <SubAlbumsHeader album={album} />
      <SubAlbumsTable album={album} />
    </>
  );
}

export default AdminSubAlbumPageLayout;
