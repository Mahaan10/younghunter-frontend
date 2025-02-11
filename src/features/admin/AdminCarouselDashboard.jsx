import { useState } from "react";
import { useLanguage } from "../../context/useLanguageContext";
import AccessModal from "../../ui/AccessModal";
import ImagesHeader from "./images/ImagesHeader";
import ImagesTable from "./images/ImagesTable";

function AdminCarouselDashboard() {
  const { language } = useLanguage();
  const [isImageAccessOpen, setIsImageAccessOpen] = useState(false);
  const [isCarouselImageAccessOpen, setIsCarouselImageAccessOpen] = useState(false);
  //const [isCreatingOpen, setIsCreatingOpen] = useState(false);
  //const [isDeletingOpen, setIsDeletingOpen] = useState(false);
  return (
    <>
      <div className="flex items-center justify-center gap-x-8 text-xs pb-4 max-w-[500px] mx-auto">
        <button
          className="bg-green-600 adminRoleBtn text-black"
          onClick={() => setIsImageAccessOpen((prev) => !prev)}
        >
          {language === "en" ? "Image Access" : "دسترسی به عکس ها"}
        </button>
        <button className="bg-green-600 adminRoleBtn text-black" onClick={() => setIsCarouselImageAccessOpen((prev) => !prev)}>
          {language === "en" ? "Carousel Access" : "دسترسی به کاروسل"}
        </button>
      </div>

      {isImageAccessOpen && (
        <AccessModal
          title={language === "en" ? "Create new Image" : "ایجاد عکس جدید"}
          onClose={() => setIsImageAccessOpen(false)}
        >
          <ImagesHeader />
          <ImagesTable />
        </AccessModal>
      )}
    </>
  );
}

export default AdminCarouselDashboard;
