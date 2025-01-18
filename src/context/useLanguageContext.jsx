import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");
  const [direction, setDirection] = useState("ltr");

  const changeLanguage = (lang) => {
    setLanguage(lang);
    if (lang === "fa") {
      setDirection("rtl")
    } else {
      setDirection("ltr")
    }
  };

  return (
    <LanguageContext.Provider value={{ changeLanguage, direction, language }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  return context;
};
