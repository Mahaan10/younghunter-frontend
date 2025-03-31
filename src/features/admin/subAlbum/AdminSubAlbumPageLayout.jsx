import SubAlbumsHeader from "./SubAlbumHeader";
import SubAlbumsTable from "./SubAlbumsTable";

function AdminSubAlbumPageLayout({ album }) {
  return (
    <>
      <SubAlbumsHeader album={album} />
      <SubAlbumsTable album={album} />
    </>
  );
}

export default AdminSubAlbumPageLayout;
