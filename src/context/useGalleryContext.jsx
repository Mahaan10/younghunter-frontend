import { createContext, useContext, useState } from "react";

const GalleryContext = createContext();

export default function GalleryContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <GalleryContext.Provider
      value={{
        isOpen,
        setIsOpen,
        value,
        setValue,
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
}

export const useGalleryContext = () => {
  const context = useContext(GalleryContext);
  return context;
};
