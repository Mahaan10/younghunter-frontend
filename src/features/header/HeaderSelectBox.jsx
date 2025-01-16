import i18n from "../../locales/i18n";

function HeaderSelectBox() {
  const changeLanguageHandler = (event) => {
    if (event.target.value === "en") {
      i18n.changeLanguage("en");
      document.body.dir = "ltr";
    } else {
      i18n.changeLanguage("fa");
      document.body.dir = "rtl";
    }
  };

  return (
    <select
      name="language"
      className="border-none focus:ring-transparent text-sm font-semibold"
      onChange={(event) => changeLanguageHandler(event)}
    >
      <option value="en">English</option>
      <option value="fa">فارسی</option>
    </select>
  );
}

export default HeaderSelectBox;
