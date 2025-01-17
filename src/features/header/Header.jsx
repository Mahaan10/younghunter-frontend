import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HeaderNavlink from "./HeaderNavlink";
import HeaderSelectBox from "./HeaderSelectBox";
import Authentication from "./Authentication";
import HeaderOffcanvas from "./HeaderOffcanvas";
import HeaderHashlink from "./HeaderHashlink";

function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <div className="border-b-2 flex items-center gap-x-4 border-black relative">
        <button className="w-24">
          <Link to="/">
            <img src="/logo demo.jpg" alt="" />
          </Link>
        </button>
        <h5 className="font-bold md:text-4xl text-base tracking-wide absolute rtl:left-14 md:rtl:left-32 ltr:left-32">
          Y O U N G H U N T E R
        </h5>
      </div>
      <div className="md:border-b md:border-black md:border-opacity-20 mt-2">
        <div className="flex flex-wrap items-center justify-between">
          <button
            data-testid="navbar-default"
            className="absolute top-4 rtl:left-1 ltr:right-1 p-2 w-10 h-10 text-2xl text-gray-700 md:hidden focus:outline-none"
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
              <span>{t("navbar_1")}</span>
            </HeaderNavlink>
            <HeaderNavlink to="gallery">
              <span>{t("navbar_2")}</span>
            </HeaderNavlink>
            <HeaderHashlink to="#contact">
              <span>{t("navbar_3")}</span>
            </HeaderHashlink>
            <HeaderHashlink to="#about">
              <span>{t("navbar_4")}</span>
            </HeaderHashlink>
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
