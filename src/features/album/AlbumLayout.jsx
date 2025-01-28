import { TbAlbum } from "react-icons/tb";
import GalleryNavbar from "../gallery/GalleryNavbar";
import { useGalleryContext } from "../../context/useGalleryContext";
import { Outlet } from "react-router-dom";
import ScrollToTopButton from "../../ui/ScrollButton";
import GalleryOffcanvas from "../gallery/GalleryOffcanvas";
import { useAdmin } from "../../context/useAdminContext";
import { useLanguage } from "../../context/useLanguageContext";

function AlbumLayout() {
  const { setIsOpen } = useGalleryContext();
  const { isAdmin } = useAdmin();
  const { language } = useLanguage();

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
        {isAdmin && (
          <div className="flex items-center justify-between gap-x-8 text-xs pb-4 flex-wrap md:flex-row flex-col max-w-[85%] mx-auto gap-y-2">
            <div className="flex items-center gap-x-2">
              <button className="bg-green-600 adminRoleBtn max-w-40">
                {language === "en" ? "Create New Album" : "افزودن آلبوم جدید"}
              </button>
              <button className="bg-cyan-600 adminRoleBtn max-w-40">
                {language === "en" ? "Edit Album" : "ادیت کردن آلبوم"}
              </button>
              <button className="bg-red-600 adminRoleBtn max-w-40">
                {language === "en" ? "Delete Album" : "پاک کردن آلبوم"}
              </button>
            </div>
            <div className="flex items-center gap-x-2 md:flex-row">
              <button className="bg-green-600 adminRoleBtn max-w-40 ">
                {language === "en" ? "Create Sub Album" : "افزودن زیر آلبوم"}
              </button>
              <button className="bg-cyan-600 adminRoleBtn max-w-40">
                {language === "en" ? "Edit Sub Album" : "ادیت کردن زیر آلبوم"}
              </button>
              <button className="bg-yellow-600 adminRoleBtn max-w-40 ">
                {language === "en" ? "Add Sub Album to Album" : " افزودن زیر آلبوم به آلبوم"}
              </button>
              <button className="bg-red-600 adminRoleBtn max-w-40 ">
                {language === "en" ? "Delete Sub Album" : "پاک کردن زیر آلبوم"}
              </button>
            </div>
            <div className="flex items-center gap-x-2">
              <button className="bg-green-600 adminRoleBtn max-w-40 ">
                {language === "en" ? "Add Image to Sub Album" : "افزودن عکس به زیر آلبوم"}
              </button>
              <button className="bg-red-600 adminRoleBtn">
                {language === "en" ? "Delete image from Sub Album" : "پاک کردن عکس از زیر آلبوم"}
              </button>
            </div>
          </div>
        )}
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
