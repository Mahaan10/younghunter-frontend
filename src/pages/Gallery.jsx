import GalleryContextProvider from "../context/useGalleryContext";
import AlbumLayout from "../features/album/AlbumLayout";

function Gallery() {
  return (
    <GalleryContextProvider>
      <AlbumLayout />
    </GalleryContextProvider>
  );
}

export default Gallery;
