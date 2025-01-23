import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/useLanguageContext";
import useAlbums from "../../hooks/useAlbums";
//import useCarouselImages from "../../hooks/useCarouselImages";
import Loading from "../../ui/Loading";
import toast from "react-hot-toast";

function GalleryMain() {
  //const { images, isLoading } = useCarouselImages();
  const { albums, isLoading, isError } = useAlbums();
  const { language } = useLanguage();
  const navigate = useNavigate();

  if (isLoading) return <Loading />;
  // error message needs to be re-watch!
  if (isError)
    return toast.error(`${language === "en" ? "an error ocuured!" : "ارور"}`);

  return (
    <>
      <div className="rounded-2xl shadow-3xl  gap-y-4 p-5 max-w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 min-[1119px]:grid-cols-3">
        {albums.map((album) => (
          <div
            key={album._id}
            className="flex flex-col shadow-3xl max-w-[300px] rounded-lg mx-auto py-3 gap-y-2 max-h-[600px]"
          >
            <span className="text-xs text-center font-bold text-red-950">
              Lorem, ipsum dolor sit amet.
            </span>
            <button className="" onClick={() => navigate(album._id)}>
              <img
                src={album.imageCover}
                className={`object-contain shadow-3xl rounded-lg mx-auto w-[300px] h-[300px]`}
                alt=""
              />
            </button>
            <h1 className="font-bold text-2xl mx-2.5">{`${
              language === "en" ? album.title.en : album.title.fa
            }`}</h1>
          </div>
        ))}
      </div>
    </>
  );
}

export default GalleryMain;
