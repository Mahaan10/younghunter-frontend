import { useLanguage } from "../../context/useLanguageContext";
import useAlbums from "../../hooks/useAlbums";
import Loading from "../../ui/Loading";
import FooterNavlink from "./FooterNavlink";
import toast from "react-hot-toast";
import {
  Footer,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";

function FooterMain() {
  const { albums, isLoading, isError } = useAlbums();
  const { language } = useLanguage();

  if (isLoading) return <Loading />;
  // error message needs to be re-watch!
  if (isError)
    return toast.error(`${language === "en" ? "an error ocuured!" : "ارور"}`);

  return (
    <Footer
      container
      className="bg-gray-950 dark:bg-opacity-65 dark:text-black bg-opacity-90 rounded-none"
    >
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 w-full">
            <div>
              <FooterTitle
                className="dark:text-black text-neutral-200"
                title={language === "en" ? "Pages" : "صفحات"}
              />
              <FooterLinkGroup col className="space-y-2">
                <li>
                  <FooterNavlink to="/">
                    <span>{language === "en" ? "Home" : "صفحه اصلی"}</span>
                  </FooterNavlink>
                </li>
                <li>
                  <FooterNavlink to="/albums">
                    <span>{language === "en" ? "Gallery" : "گالری"}</span>
                  </FooterNavlink>
                </li>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle
                className="dark:text-black text-neutral-200"
                title="Albums"
              />
              <FooterLinkGroup
                col
                className="space-y-2 dark:text-black dark:text-opacity-80"
              >
                {albums.map((album) => (
                  <FooterLink key={album._id} href={`albums/${album._id}`}>
                    {language === "en" ? album.title.en : album.title.fa}
                  </FooterLink>
                ))}
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle
                className="dark:text-black text-neutral-200"
                title="Sub Albums"
              />
              {albums.map((album, albumIndex) => (
                <FooterLinkGroup
                  col
                  key={albumIndex}
                  className="space-y-2 mb-2 dark:text-black dark:text-opacity-80"
                >
                  {album.subAlbums.map((subAlbum) => (
                    <FooterLink
                      key={subAlbum._id}
                      href={`albums/${album._id}/sub-albums/${subAlbum._id}`}
                    >
                      {language === "en"
                        ? subAlbum.title.en
                        : subAlbum.title.fa}
                    </FooterLink>
                  ))}
                </FooterLinkGroup>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterMain;
