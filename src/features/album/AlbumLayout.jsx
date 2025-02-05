import { TbAlbum } from "react-icons/tb";
import GalleryNavbar from "../gallery/GalleryNavbar";
import { useGalleryContext } from "../../context/useGalleryContext";
import { Outlet } from "react-router-dom";
import ScrollToTopButton from "../../ui/ScrollButton";
import GalleryOffcanvas from "../gallery/GalleryOffcanvas";
import AdminDashboard from "../admin/AdminDashboard";

function AlbumLayout() {
  const { setIsOpen } = useGalleryContext();

  return (
    <div className="">
      <div className="bg-gray-950 bg-opacity-70 dark:bg-opacity-90 shadow-sm shadow-gray-500 mt-1 flex items-center justify-center relative">
        <GalleryNavbar />

        <button
          className=" text-gray-200 hover:text-gray-300 mx-4"
          onClick={() => setIsOpen(true)}
        >
          <TbAlbum className="h-10 w-10" />
        </button>
      </div>
      <div className="w-full mx-auto py-8 dark:bg-zinc-950 transition-all duration-300">
        <AdminDashboard />
        <div className="rounded-2xl shadow-3xl  gap-y-4 p-5 max-w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 min-[1119px]:grid-cols-3 dark:bg-neutral-200 dark:shadow-neutral-600">
          <Outlet />
        </div>
        <GalleryOffcanvas />
      </div>
      <ScrollToTopButton />
    </div>
  );
}

export default AlbumLayout;
