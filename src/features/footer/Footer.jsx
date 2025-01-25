import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  if (isLoading) return <Loading />;
  // error message needs to be re-watch!
  if (isError)
    return toast.error(`${language === "en" ? "an error ocuured!" : "ارور"}`);

  return (
    /*     <div className="bg-gray-950 dark:bg-opacity-65 dark:text-black bg-opacity-90 w-full mx-auto text-white">
      <div className="p-5 grid grid-cols-1 md:grid-cols-2 min-[900px]:grid-cols-3 text-sm">
        <div className="w-full mx-auto flex items-center md:flex-col flex-row justify-between md:justify-start px-14 md:px-0">
          <h1 className="md:text-center text-nowrap text-neutral-100 text-opacity-65 dark:text-neutral-950 dark:text-opacity-85 font-bold text-xl">
            {language === "en" ? "Page List" : "صفحات"}
          </h1>
          <ul className="flex items-center flex-row justify-center md:flex-col md:mx-auto px-[6.5rem]">
            <FooterNavlink to="/">
              <span>{language === "en" ? "Home" : "صفحه اصلی"}</span>
            </FooterNavlink>
            <FooterNavlink to="albums">
              <span>{language === "en" ? "Gallery" : "گالری"}</span>
            </FooterNavlink>
          </ul>
        </div>
        <div className="w-full mx-auto flex items-center md:flex-col flex-row justify-between md:justify-start px-14 md:px-0 mt-5 md:mt-0">
          <h1 className="md:text-center text-nowrap text-neutral-100 text-opacity-65 dark:text-neutral-950 dark:text-opacity-85 font-bold text-xl">
            {language === "en" ? "Albums" : "آلبوم ها"}
          </h1>
          <ul className="flex items-center flex-row justify-center md:flex-col md:mx-auto px-24 text-nowrap">
            {albums.map((album) => (
              <li key={album._id} className="mt-2 px-4">
                <button onClick={() => navigate(`albums/${album._id}`)}>
                  {language === "en" ? album.title.en : album.title.fa}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <h1 className="text-neutral-100 text-opacity-65 dark:text-neutral-950 dark:text-opacity-85 font-bold text-xl">
            {language === "en" ? "Sub Albums" : "زیر آلبوم ها"}
          </h1>
          {albums.map((album, albumIndex) => (
            <ul key={albumIndex}>
              {album.subAlbums.map((subAlbum) => (
                <li key={subAlbum._id} className="mt-2">
                  <button
                    onClick={() =>
                      navigate(`albums/${album._id}/sub-albums/${subAlbum._id}`)
                    }
                  >
                    {language === "en" ? subAlbum.title.en : subAlbum.title.fa}
                  </button>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div> */

    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FooterTitle title={language === "en" ? "Pages" : "صفحات"} />
              <FooterLinkGroup col>
                <button>
                  <FooterNavlink to="/">
                    <span>{language === "en" ? "Home" : "صفحه اصلی"}</span>
                  </FooterNavlink>
                </button>
                <button>
                  <FooterNavlink to="/albums">
                    <span>{language === "en" ? "Gallery" : "گالری"}</span>
                  </FooterNavlink>
                </button>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Albums" />
              <FooterLinkGroup col>
                {albums.map((album) => (
                  <FooterLink key={album._id}>
                    <button onClick={() => navigate(`albums/${album._id}`)}>
                      {language === "en" ? album.title.en : album.title.fa}
                    </button>
                  </FooterLink>
                ))}
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Sub Albums" />
              <FooterLinkGroup col>
                {albums.map((album, albumIndex) => (
                  <FooterLink key={albumIndex}>
                    {album.subAlbums.map((subAlbum) => (
                      <div key={subAlbum._id}>
                        <button
                          onClick={() =>
                            navigate(
                              `albums/${album._id}/sub-albums/${subAlbum._id}`
                            )
                          }
                        >
                          {language === "en"
                            ? subAlbum.title.en
                            : subAlbum.title.fa}
                        </button>
                      </div>
                    ))}
                  </FooterLink>
                ))}
              </FooterLinkGroup>
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterMain;
