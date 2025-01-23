import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/useLanguageContext";
import useAlbums from "../../hooks/useAlbums";
import Loading from "../../ui/Loading";
import FooterNavlink from "./FooterNavlink";
import toast from "react-hot-toast";

function Footer() {
  const { albums, isLoading, isError } = useAlbums();
  const { language } = useLanguage();
  const navigate = useNavigate();

  if (isLoading) return <Loading />;
  // error message needs to be re-watch!
  if (isError)
    return toast.error(`${language === "en" ? "an error ocuured!" : "ارور"}`);

  return (
    <div className="bg-gray-950 bg-opacity-70 mt-4 w-full mx-auto text-white">
      <div className="max-w-[85%] p-5 mx-auto grid grid-cols-1 md:grid-cols-2 min-[900px]:grid-cols-3 text-sm">
        <div className="w-full mx-auto">
          <h1 className="w-40 text-center text-nowrap text-neutral-300">
            {language === "en" ? "Page List" : "صفحات"}
          </h1>
          <ul className="w-40">
            <FooterNavlink to="/">
              <span>{language === "en" ? "Home" : "صفحه اصلی"}</span>
            </FooterNavlink>
            <FooterNavlink to="albums">
              <span>{language === "en" ? "Gallery" : "گالری"}</span>
            </FooterNavlink>
          </ul>
        </div>
        <div className="">
          <h1 className="text-neutral-300">
            {language === "en" ? "Albums" : "آلبوم ها"}
          </h1>
          <ul>
            {albums.map((album) => (
              <li key={album._id} className="mt-2">
                <button onClick={() => navigate(`albums/${album._id}`)}>
                  {language === "en" ? album.title.en : album.title.fa}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <h1 className="text-neutral-300">
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
    </div>
  );
}

export default Footer;
