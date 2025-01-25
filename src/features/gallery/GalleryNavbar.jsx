import { useGalleryContext } from "../../context/useGalleryContext";
import { useLanguage } from "../../context/useLanguageContext";
import GallerySortSelectBox from "./GallerySortSelectBox";
import { PiMagnifyingGlassBold } from "react-icons/pi";

function GalleryNavbar() {
  const { value, setValue } = useGalleryContext();
  const { language } = useLanguage();

  return (
    <div className="flex items-center justify-center w-[50%] mx-auto md:flex-row flex-col-reverse md:gap-x-14">
      <GallerySortSelectBox />
      <div className="flex border border-transparent items-center md:w-[50%] w-full mx-auto bg-white my-2 rounded-xl relative shadow-md shadow-slate-900 dark:bg-transparent dark:border dark:border-gray-100 dark:text-neutral-200 transition-all duration-300 dark:shadow-neutral-600">
        <input
          type="text"
          placeholder={`${language === "en" ? "Search..." : "جستجو ..."}`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-[95%] mx-auto my-0.5 focus:ring-transparent focus:border-none border-none dark:bg-transparent transition-all duration-300"
        />
        <button
          className={`absolute ${language === "en" ? "right-1" : "left-1"}`}
        >
          <PiMagnifyingGlassBold className="size-6" />
        </button>
      </div>
    </div>
  );
}

export default GalleryNavbar;
