import { useState } from "react";
import { useAdmin } from "../../context/useAdminContext";
import { useLanguage } from "../../context/useLanguageContext";
import { useModal } from "../../context/useOpenModalContext";
import CreateAlbum from "./create album/CreateAlbum";

function AdminButtons() {
  const { isAdmin } = useAdmin();
  const { language } = useLanguage();
  //const {openModal, setOpenModal} = useModal()
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      {isAdmin && (
        <div className="flex items-center justify-between gap-x-8 text-xs pb-4 flex-wrap md:flex-row flex-col max-w-[85%] mx-auto gap-y-2">
          <div className="flex items-center gap-x-2">
            <CreateAlbum openModal={openModal} setOpenModal={setOpenModal}/>
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
              {language === "en"
                ? "Add Sub Album to Album"
                : " افزودن زیر آلبوم به آلبوم"}
            </button>
            <button className="bg-red-600 adminRoleBtn max-w-40 ">
              {language === "en" ? "Delete Sub Album" : "پاک کردن زیر آلبوم"}
            </button>
          </div>
          <div className="flex items-center gap-x-2">
            <button className="bg-green-600 adminRoleBtn max-w-40 ">
              {language === "en"
                ? "Add Image to Sub Album"
                : "افزودن عکس به زیر آلبوم"}
            </button>
            <button className="bg-red-600 adminRoleBtn">
              {language === "en"
                ? "Delete image from Sub Album"
                : "پاک کردن عکس از زیر آلبوم"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default AdminButtons;
