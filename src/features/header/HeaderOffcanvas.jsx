import { Drawer, Sidebar } from "flowbite-react";
import { HiMiniXMark } from "react-icons/hi2";
import HeaderNavlink from "./HeaderNavlink";
import HeaderSelectBox from "./HeaderSelectBox";
import Authentication from "./Authentication";
import { useTranslation } from "react-i18next";
import HeaderHashlink from "./HeaderHashlink";

function HeaderOffcanvas({ open, onClose }) {
  const { t } = useTranslation();
  const bodyDir = document.body.dir;

  return (
    <div className="md:hidden">
      <Drawer
        open={open}
        onClose={onClose}
        position={`${bodyDir === "ltr" ? "right" : "left"}`}
        className="transition-all duration-300"
      >
        <div className="flex items-center justify-between">
          <button
            className="rounded-md p-1 hover:bg-gray-200"
            onClick={onClose}
          >
            <HiMiniXMark className="w-5 h-5 text-gray-400 hover:text-gray-600" />
          </button>
          <div className="flex items-center">
            <img src="/logo demo.jpg" alt="" className="w-10" />
          </div>
        </div>
        <Drawer.Items>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:p-0 mx-auto"
          >
            <div className="flex h-full flex-col justify-between py-2 bg-white">
              <div>
                <Sidebar.Items className="bg-white">
                  <Sidebar.ItemGroup className="border-none">
                    <HeaderNavlink onClose={onClose} to="/">
                      <span>{t("navbar_1")}</span>
                    </HeaderNavlink>
                    <HeaderNavlink onClose={onClose} to="gallery">
                      <span>{t("navbar_2")}</span>
                    </HeaderNavlink>
                    <HeaderHashlink onClose={onClose} to="#contact">
                      <span>{t("navbar_3")}</span>
                    </HeaderHashlink>
                    <HeaderHashlink onClose={onClose} to="#about">
                      <span>{t("navbar_4")}</span>
                    </HeaderHashlink>
                  </Sidebar.ItemGroup>
                  <Sidebar.ItemGroup className="border-none">
                    <div className="flex flex-col gap-y-4">
                      <HeaderSelectBox />
                      <Authentication />
                    </div>
                  </Sidebar.ItemGroup>
                </Sidebar.Items>
              </div>
            </div>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </div>
  );
}

export default HeaderOffcanvas;
