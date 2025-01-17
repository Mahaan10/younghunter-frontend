import { useGalleryContext } from "../../context/useGalleryContext";
import GallerySortSelectBox from "./GallerySortSelectBox";
import { PiMagnifyingGlassBold } from "react-icons/pi";

function GalleryNavbar() {
  const { value, setValue } = useGalleryContext();

  return (
    <div className="flex items-center justify-center w-[50%] mx-auto md:flex-row flex-col-reverse md:gap-x-14">
      <GallerySortSelectBox />
      {/* <div className="relative flex items-center md:w-[50%] mx-auto w-full">
        <input
          type="text"
          className="my-2 rounded-xl w-full mx-auto text-black border border-gray-100 bg-zinc-100 hover:border-blue-500 focus:border-blue-500 focus:bg-neutral-50 transition-all duration-300 ease-out shadow-sm shadow-slate-800 focus:shadow-slate-950 focus:shadow-md"
          placeholder="Search..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="absolute right-1 ">
          <PiMagnifyingGlassBold className="size-6" />
        </button>
      </div> */}
      <div className="flex items-center md:w-[50%] w-full mx-auto bg-white my-2 rounded-xl relative shadow-md shadow-slate-900 ">
        <input
          type="text"
          placeholder="Search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-[95%] mx-auto my-0.5 focus:ring-transparent focus:border-none border-none"
        />
        <button className="absolute right-1">
          <PiMagnifyingGlassBold className="size-6" />
        </button>
      </div>
    </div>
  );
}

export default GalleryNavbar;
