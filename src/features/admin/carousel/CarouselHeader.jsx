import { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import { useLanguage } from "../../../context/useLanguageContext";
import Modal from "../../../ui/Modal";
import CarouselAddImageTable from "./CarouselAddImageTable";

function CarouselHeader() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 mx-4">
      <button
        className="btn flex items-center justify-between w-60 bg-green-600"
        onClick={() => setIsOpen(true)}
      >
        <span>{language === "en" ? "Add New Image to Carousel" : "افزودن عکس جدید به کاروسل"}</span>
        <HiOutlinePlus className="w-5 h-5" />
      </button>
      {isOpen && (
        <Modal
          title={language === "en" ? "Create New Image to Carousel" : "افزودن عکس جدید به کاروسل"}
          onClose={() => setIsOpen(false)}
        >
          <CarouselAddImageTable />
        </Modal>
      )}
    </div>
  );
}

export default CarouselHeader;
