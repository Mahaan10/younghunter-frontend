import { useState } from "react";
import { useLanguage } from "../../context/useLanguageContext";
import AccessModal from "../../ui/AccessModal";
import ImagesHeader from "./images/ImagesHeader";
import ImagesTable from "./images/ImagesTable";

function AdminImagesDashboard() {
  const { language } = useLanguage();
  const [isImageAccessOpen, setIsImageAccessOpen] = useState(false);
  const [sortImages, setSortImages] = useState("all");

  return (
    <>
      <div className="flex items-center justify-center gap-x-8 text-xs pb-4 max-w-[500px] mx-auto">
        <button
          className="bg-green-600 adminRoleBtn text-black"
          onClick={() => setIsImageAccessOpen((prev) => !prev)}
        >
          {language === "en" ? "Image Access" : "دسترسی به عکس ها"}
        </button>
      </div>

      {isImageAccessOpen && (
        <AccessModal
          title={language === "en" ? "Image Access" : "دسترسی به عکس"}
          onClose={() => setIsImageAccessOpen(false)}
        >
          <ImagesHeader sortImages={sortImages} setSortImages={setSortImages} />
          <ImagesTable sortImages={sortImages} />
        </AccessModal>
      )}
    </>
  );
}

export default AdminImagesDashboard;
