import { createContext, useContext, useState } from "react";
import useAlbums from "../hooks/useAlbums";

const AccordionContext = createContext();

export const AccordionProvider = ({ children }) => {
  const { albums } = useAlbums();
  const [openSubAlbumId, setOpenSubAlbumId] = useState(albums[0]._id);

  const openAccordion = (id) => {
    setOpenSubAlbumId(id);
  };

  const closeAccordion = () => {
    setOpenSubAlbumId(null);
  };

  return (
    <AccordionContext.Provider
      value={{ openSubAlbumId, openAccordion, closeAccordion }}
    >
      {children}
    </AccordionContext.Provider>
  );
};

export const useAccordion = () => {
  const context = useContext(AccordionContext);
  return context;
};
