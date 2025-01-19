import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import HeaderNavlink from "./HeaderNavlink";
import HeaderSelectBox from "./HeaderSelectBox";
import Authentication from "./Authentication";
import HeaderOffcanvas from "./HeaderOffcanvas";
import HeaderHashlink from "./HeaderHashlink";
import { useLanguage } from "../../context/useLanguageContext";

function Header() {
  const [open, setOpen] = useState(false);
  const { language } = useLanguage();
  const location = useLocation();
  return (
    <>
      <div
        className="border-b-2 flex items-center gap-x-4 border-black"
        style={{ direction: "ltr" }}
      >
        <button className="w-24">
          <Link to="/">
            <img src="/logo demo.jpg" alt="" />
          </Link>
        </button>
        <h5 className="font-bold md:text-4xl text-base tracking-wide">
          Y O U N G H U N T E R
        </h5>
      </div>
      <div className="md:border-b md:border-black md:border-opacity-20 mt-2">
        <div className="flex flex-wrap items-center justify-between">
          <button
            data-testid="navbar-default"
            className="absolute top-4 right-1 p-2 w-10 h-10 text-2xl text-gray-700 md:hidden focus:outline-none"
            style={{ direction: "ltr" }}
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() => setOpen(!open)}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <ul className="hidden md:flex md:flex-row items-center gap-x-12 text-xl ml-2 font-bold">
            <HeaderNavlink to="/">
              <span>{language === "en" ? "Home" : "صفحه اصلی"}</span>
            </HeaderNavlink>
            <HeaderNavlink to="albums">
              <span>{language === "en" ? "Gallery" : "گالری"}</span>
            </HeaderNavlink>
            <HeaderHashlink to="#contact">
              <span>{language === "en" ? "Contact" : "تماس با ما"}</span>
            </HeaderHashlink>
            {location.pathname === "/" && (
              <HeaderHashlink to="#about">
                <span>{language === "en" ? "About" : "درباره ما"}</span>
              </HeaderHashlink>
            )}
          </ul>
          <div className="md:flex hidden items-center gap-x-4">
            <HeaderSelectBox onClose={() => setOpen(false)} />
            <Authentication />
          </div>
          <HeaderOffcanvas open={open} onClose={() => setOpen(false)} />
        </div>
      </div>
    </>
  );
}

export default Header;
