import { useState } from "react";
import { useLanguage } from "../../../context/useLanguageContext";
import Modal from "../../../ui/Modal";
import { HiOutlinePlus } from "react-icons/hi";

function ImageHeader({ subAlbum }) {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 mx-4">
      <button
        className="btn flex items-center justify-between w-64 bg-green-600"
        onClick={() => setIsOpen(true)}
      >
        <span>
          {language === "en"
            ? "Add New Image to Sub album"
            : "افزودن عکس جدید به زیر آلبوم"}
        </span>
        <HiOutlinePlus className="w-5 h-5" />
      </button>
      {isOpen && (
        <Modal
          title={
            language === "en" ? "Create New Sub Album" : "افزودن زیر آلبوم جدید"
          }
          onClose={() => setIsOpen(false)}
        >
          {/* !!!!!!!!! */}
        </Modal>
      )}
    </div>
  );
}

export default ImageHeader;
