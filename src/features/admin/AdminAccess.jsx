import { useState } from "react";
import { useLanguage } from "../../context/useLanguageContext";
import AccessModal from "../../ui/AccessModal";
import ImagesHeader from "./images/ImagesHeader";
import ImagesTable from "./images/ImagesTable";
import { Link } from "react-router-dom";

function AdminAccess() {
  const { language } = useLanguage();
  const [sortImages, setSortImages] = useState("all");

  return (
    <>
      <div className="flex items-center justify-center">
        <button
          className="bg-green-600 adminRoleBtn text-black text-sm"
          //onClick={() => setIsImageAccessOpen((prev) => !prev)}
        >
          <Link to="/admin">
            {language === "en" ? "Admin Access" : "دسترسی مدیریت"}
          </Link>
        </button>
      </div>

      {/* {isImageAccessOpen && (
        <AccessModal
          title={language === "en" ? "Image Access" : "دسترسی به عکس"}
          onClose={() => setIsImageAccessOpen(false)}
        >
          <ImagesHeader sortImages={sortImages} setSortImages={setSortImages} />
          <ImagesTable sortImages={sortImages} />
        </AccessModal>
      )} */}
    </>
  );
}

export default AdminAccess;
