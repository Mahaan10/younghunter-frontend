import { TbAlbum } from "react-icons/tb";
import GalleryNavbar from "../gallery/GalleryNavbar";
import { useGalleryContext } from "../../context/useGalleryContext";
import { Outlet } from "react-router-dom";
import ScrollToTopButton from "../../ui/ScrollButton";

function AlbumLayout() {
  const { setIsOpen } = useGalleryContext();
  return (
    <div>
      <div className="bg-gray-950 bg-opacity-70 shadow-sm shadow-gray-500 mt-1 mb-5 flex items-center justify-center relative">
        <GalleryNavbar />

        <button
          className=" text-gray-200 hover:text-gray-300 mx-4"
          onClick={() => setIsOpen(true)}
        >
          <TbAlbum className="size-10" />
        </button>
      </div>
      <Outlet />
      <ScrollToTopButton />
    </div>
  );
}

export default AlbumLayout;
