import { createContext, useContext, useReducer } from "react";

const AccordionContext = createContext();

const initialState = {
  openSubAlbumId: null,
};

const accordionReducer = (state, { type, payload }) => {
  switch (type) {
    case "Open":
      return { ...state, openSubAlbumId: payload };
    case "Close":
      return { ...state, openSubAlbumId: null };
    default:
      return state;
  }
};

export const AccordionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(accordionReducer, initialState);

  const openAccordion = (id) => {
    dispatch({ type: "Open", payload: id });
  };

  const closeAccordion = () => {
    dispatch({ type: "Close" });
  };

  return (
    <AccordionContext.Provider value={{ state, openAccordion, closeAccordion }}>
      {children}
    </AccordionContext.Provider>
  );
};

export const useAccordion = () => {
  const context = useContext(AccordionContext);
  return context;
};
