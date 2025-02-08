import { useState } from "react";
import { useLanguage } from "../../context/useLanguageContext";
import CreateImageForm from "./images/CreateImageForm";
import Modal from "../../ui/Modal";

function AdminCarouselDashboard() {
  const { language } = useLanguage();
  const [isCreatingOpen, setIsCreatingOpen] = useState(false);
  //const [isDeletingOpen, setIsDeletingOpen] = useState(false);
  return (
    <>
      <div className="flex items-center justify-center gap-x-8 text-sm pb-4 max-w-[500px] mx-auto">
        <button
          className="bg-green-600 adminRoleBtn text-neutral-200"
          onClick={() => setIsCreatingOpen((prev) => !prev)}
        >
          {language === "en" ? "Upload Image" : "بارگذاری عکس"}
        </button>
        <button
          className="bg-red-600 adminRoleBtn text-neutral-200"
          onClick={() => setIsCreatingOpen((prev) => !prev)}
        >
          {language === "en"
            ? "Delete Image from Carousel"
            : "حذف کردن عکس از کاروسل"}
        </button>
      </div>

      {isCreatingOpen && (
        <Modal
          title={language === "en" ? "Create new Image" : "ایجاد عکس جدید"}
          onClose={() => setIsCreatingOpen(false)}
        >
          <CreateImageForm onClose={() => setIsCreatingOpen(false)} />
        </Modal>
      )}
    </>
  );
}

export default AdminCarouselDashboard;
