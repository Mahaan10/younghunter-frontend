import { useState } from "react";
import { useLanguage } from "../../context/useLanguageContext";
import AccessModal from "../../ui/AccessModal";
import ImagesHeader from "./images/ImagesHeader";
import ImagesTable from "./images/ImagesTable";

function AdminCarouselDashboard() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  //const [isCreatingOpen, setIsCreatingOpen] = useState(false);
  //const [isDeletingOpen, setIsDeletingOpen] = useState(false);
  return (
    <>
      <div className="flex items-center justify-center gap-x-8 text-sm pb-4 max-w-[500px] mx-auto">
        <button
          className="bg-green-600 adminRoleBtn text-neutral-200"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {language === "en" ? "Image Access" : "دسترسی به عکس ها"}
        </button>
      </div>

      {isOpen && (
        <AccessModal
          title={language === "en" ? "Create new Image" : "ایجاد عکس جدید"}
          onClose={() => setIsOpen(false)}
        >
          <ImagesHeader />
          <ImagesTable />
        </AccessModal>
      )}
    </>
  );
}

export default AdminCarouselDashboard;
