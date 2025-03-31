import { useParams } from "react-router-dom";
import ImageHeader from "./ImageHeader";
import ImagesTable from "./ImageTable";
import useAlbums from "../../../../hooks/useAlbums";

function AdminSubAlbumImagesPageLayout() {
  const { albums } = useAlbums();
  const { albumId, subAlbumId } = useParams();
  const album = albums?.find((album) => album._id === albumId);
  const subAlbum = album?.subAlbums?.find(
    (subAlbum) => subAlbum._id === subAlbumId
  );

  console.log("albums:", albums);
  console.log("album:", album);
  console.log("subAlbum:", subAlbum);
  console.log("albumId:", albumId);
  console.log("subAlbumId:", subAlbumId);

  return (
    <>
      <ImageHeader album={album} subAlbum={subAlbum} />
      <ImagesTable album={album} subAlbum={subAlbum} />
    </>
  );
}

export default AdminSubAlbumImagesPageLayout;
