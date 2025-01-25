import GalleryMain from "./GalleryMain";
import GalleryOffcanvas from "./GalleryOffcanvas";

function Albums() {
  return (
    <div className="w-full mx-auto py-8 dark:bg-zinc-950 transition-all duration-300">
      <GalleryMain />
      <GalleryOffcanvas />
    </div>
  );
}

export default Albums;
