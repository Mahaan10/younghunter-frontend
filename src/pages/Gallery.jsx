import { useState } from "react";
import GalleryContextProvider from "../context/useGalleryContext";
import GalleryMain from "../features/gallery/GalleryMain";
import GalleryOffcanvas from "../features/gallery/GalleryOffcanvas";
import ScrollToTopButton from "../ui/ScrollButton";

function Gallery() {
  const [albumIndex, setAlbumIndex] = useState(0)
  return (
    <GalleryContextProvider>
      <div className="w-full mx-auto">
        <GalleryMain albumIndex={albumIndex}/>
        <GalleryOffcanvas />
      </div>
      <ScrollToTopButton />
    </GalleryContextProvider>
  );
}

export default Gallery;
