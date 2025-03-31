import { useParams } from "react-router-dom";
import ImageHeader from "./ImageHeader";
import ImagesTable from "./ImageTable";
import useAlbums from "../../../../hooks/useAlbums";

function AdminSubAlbumImagesPageLayout() {
  const { albums } = useAlbums();
  const { albumId, subAlbumId } = useParams();
  const album = albums?.find((album) => album._id === albumId);
  const subAlbum = album?.find((subAlbum) => subAlbum._id === subAlbumId);

  return (
    <>
      <ImageHeader album={album} subAlbum={subAlbum} />
      <ImagesTable album={album} subAlbum={subAlbum} />
    </>
  );
}

export default AdminSubAlbumImagesPageLayout;
