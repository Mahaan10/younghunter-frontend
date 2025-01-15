import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HeaderNavlink from "./HeaderNavlink";
import HeaderSelectBox from "./HeaderSelectBox";
import Authentication from "./Authentication";
import HeaderOffcanvas from "./HeaderOffcanvas";

function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <div className="border-b-2 flex items-center gap-x-4 border-black">
        <button className="w-24">
          <Link to="/">
            <img src="./public/logo demo.jpg" alt="" />
          </Link>
        </button>
        <h5 className="font-semibold md:text-4xl text-base text-wrap tracking-wide">
          Y O U N G H U N T E R
        </h5>
      </div>
      <div className="md:border-b md:border-black md:border-opacity-20 mt-2">
        <div className="flex flex-wrap items-center justify-between">
          <button
            data-testid="navbar-default"
            className="absolute top-4 right-1 p-2 w-10 h-10 text-2xl text-gray-700 md:hidden focus:outline-none"
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
          <ul className="hidden md:flex md:flex-row items-center gap-x-12 text-xl mb-2 ml-2 font-semibold">
            <HeaderNavlink to="/">
              <span>{t("navbar_1")}</span>
            </HeaderNavlink>
            <HeaderNavlink to="gallery">
              <span>{t("navbar_2")}</span>
            </HeaderNavlink>
            <HeaderNavlink to="contact">
              <span>{t("navbar_3")}</span>
            </HeaderNavlink>
            <HeaderNavlink to="about">
              <span>{t("navbar_4")}</span>
            </HeaderNavlink>
          </ul>
          <div className="md:flex hidden items-center gap-x-4">
            <HeaderSelectBox />
            <Authentication />
          </div>
          <HeaderOffcanvas open={open} onClose={() => setOpen(false)} />
        </div>
      </div>
    </>
  );
}

export default Header;
