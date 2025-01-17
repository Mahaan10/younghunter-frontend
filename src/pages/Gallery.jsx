import GalleryContextProvider from "../context/useGalleryContext";
import GalleryMain from "../features/gallery/GalleryMain";
import GalleryOffcanvas from "../features/gallery/GalleryOffcanvas";
import ScrollToTopButton from "../ui/ScrollButton";

function Gallery() {
  return (
    <GalleryContextProvider>
      <div className="w-full mx-auto">
        <GalleryMain />
        <GalleryOffcanvas />
      </div>
      <ScrollToTopButton />
    </GalleryContextProvider>
  );
}

export default Gallery;
