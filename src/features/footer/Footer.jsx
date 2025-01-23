import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/useLanguageContext";
import useAlbums from "../../hooks/useAlbums";
import Loading from "../../ui/Loading";
import FooterNavlink from "./FooterNavlink";

function Footer() {
  const { albums, isLoading } = useAlbums();
  const { language } = useLanguage();
  const navigate = useNavigate();
  console.log(albums);
  return (
    <div className="bg-gray-950 bg-opacity-70 mt-4 w-full mx-auto text-white">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="max-w-[85%] p-5 mx-auto grid grid-cols-3">
          <div className="w-full mx-auto">
            <h1 className="w-1/3 text-nowrap">
              {language === "en" ? "Page List" : "صفحات"}
            </h1>
            <ul className="w-1/3">
              <FooterNavlink to="/">
                <span>{language === "en" ? "Home" : "صفحه اصلی"}</span>
              </FooterNavlink>
              <FooterNavlink to="albums">
                <span>{language === "en" ? "Gallery" : "گالری"}</span>
              </FooterNavlink>
            </ul>
          </div>
          <div className="">
            <h1 className="">{language === "en" ? "Albums" : "آلبوم ها"}</h1>

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
            <h1 className="">
              {language === "en" ? "Sub Albums" : "زیر آلبوم ها"}
            </h1>
            {albums.map((album, albumIndex) => (
              <ul key={albumIndex}>
                {album.subAlbums.map((subAlbum) => (
                  <li key={subAlbum._id} className="mt-2">
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
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Footer;
