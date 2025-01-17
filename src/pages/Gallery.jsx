import GalleryContextProvider from "../context/useGalleryContext";
import GalleryMain from "../features/gallery/GalleryMain";
import GalleryOffcanvas from "../features/gallery/GalleryOffcanvas";

function Gallery() {
  return (
    <GalleryContextProvider>
      <div className="w-full mx-auto">
        <GalleryMain />
        <GalleryOffcanvas />
      </div>
    </GalleryContextProvider>
  );
}

export default Gallery;
