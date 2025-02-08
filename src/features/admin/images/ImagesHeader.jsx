import { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import CreateImageForm from "./CreateImageForm";
import { useLanguage } from "../../../context/useLanguageContext";
import Modal from "../../../ui/Modal";

function ImagesHeader() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 mx-4">
      <button
        className="btn flex items-center justify-between w-64 bg-green-600"
        onClick={() => setIsOpen(true)}
      >
        <span>{language === "en" ? "Add New Image" : "افزودن عکس جدید"}</span>
        <HiOutlinePlus className="w-5 h-5" />
      </button>
      {isOpen && (
        <Modal
          title={language === "en" ? "Create New Image" : "افزودن عکس جدید"}
          onClose={() => setIsOpen(false)}
        >
          <CreateImageForm onClose={() => setIsOpen(false)} />
        </Modal>
      )}
    </div>
  );
}

export default ImagesHeader;
