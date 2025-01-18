import { useEffect } from "react";
import { useLanguage } from "../../context/useLanguageContext";

function HeaderSelectBox() {
  const { language, changeLanguage, direction } = useLanguage();

  useEffect(() => {
    document.documentElement.setAttribute("dir", direction);
    document.documentElement.setAttribute("lang", language);
  }, [direction, language]);

  const changeLanguageHandler = (event) => {
    changeLanguage(event.target.value);
  };

  return (
    <select
      name="language"
      className="border-none focus:ring-transparent text-sm font-semibold"
      value={language}
      onChange={changeLanguageHandler}
    >
      <option value="en">English</option>
      <option value="fa">فارسی</option>
    </select>
  );
}

export default HeaderSelectBox;
