import { useLanguage } from "../../context/useLanguageContext";

function GallerySortSelectBox() {
  const { language } = useLanguage();
  return (
    <select
      name="preferSearch"
      className="w-full md:w-fit border-none focus:ring-transparent text-sm p-1 rounded-md shadow-sm shadow-slate-800 md:mb-0 mb-2"
      onChange={(e) => console.log(e.target.value)}
    >
      <option value="new">
        {language === "en" ? "Based on Newest" : "براساس جدید ترین"}
      </option>
      <option value="old">
        {language === "en" ? "Based on Oldest" : "براساس قدیمی ترین"}
      </option>
    </select>
  );
}

export default GallerySortSelectBox;
