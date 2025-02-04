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
  const { albums, isLoading, isError, error } = useAlbums();
  const { language } = useLanguage();

  if (isLoading) return <Loading />;
  // error message needs to be re-watch!
  if (isError) {
    toast.error(error?.response?.data?.message);
    return <p className="text-center text-red-600">{language === "en" ? "Failed to load Albums" : "مشکلی در بازگذاری آلبوم ها وجود دارد!"}</p>
  }

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
                <ul>
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
                </ul>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle
                className="dark:text-black text-neutral-200"
                title="Albums"
              />
              <FooterLinkGroup
                col
                className={`grid space-y-2 ${albums.length > 5 ? "grid-cols-2" : "grid-cols-1"} dark:text-black dark:text-opacity-80`}
              >
                {albums.length ? albums.map((album) => (
                  <FooterLink key={album._id} href={`/albums/${album._id}/sub-albums`}>
                    {language === "en" ? album.title.en : album.title.fa}
                  </FooterLink>
                )) : <p className="text-gray-400 text-sm">{language === "en" ? "No Albums available!" : "آلبومی یافت نشد!"}</p>}
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle className="text-neutral-200 dark:text-black" title="Sub Albums" />
              {albums.length ? (
                albums.map((album) => (
                  <FooterLinkGroup key={album._id} col className={`grid space-y-2 ${album.subAlbums.length > 5 ? "grid-cols-2" : "grid-cols-1"} dark:text-opacity-80 dark:text-black gap-2`}>
                    {album.subAlbums.map((subAlbum) => (
                      <FooterLink key={subAlbum._id} className="py-1" href={`/albums/${album._id}/sub-albums/${subAlbum._id}`}>
                        {language === "en" ? subAlbum.title.en : subAlbum.title.fa}
                      </FooterLink>
                    ))}
                  </FooterLinkGroup>
                ))
              ) : (
                <p className="text-gray-400 text-sm">No sub-albums available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterMain;
