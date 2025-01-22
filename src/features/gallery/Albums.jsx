import GalleryMain from "./GalleryMain";
import GalleryOffcanvas from "./GalleryOffcanvas";

function Albums() {
  return (
    <div className="w-full mx-auto">
      <GalleryMain />
      <GalleryOffcanvas />
    </div>
  );
}

export default Albums;
