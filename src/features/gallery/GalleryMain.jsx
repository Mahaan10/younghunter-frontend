import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/useLanguageContext";
import useAlbums from "../../hooks/useAlbums";
//import useCarouselImages from "../../hooks/useCarouselImages";
import Loading from "../../ui/Loading";
import toast from "react-hot-toast";

function GalleryMain() {
  const { albums, isLoading, isError, error } = useAlbums();
  const { language } = useLanguage();
  const navigate = useNavigate();

  if (isLoading) return <Loading />;
  if (isError) return toast.error(error.response.data.message);

  return (
    <>
      {albums.map((album) => (
        <div
          key={album._id}
          className="flex flex-col shadow-3xl max-w-[300px] rounded-lg mx-auto py-3 gap-y-2 max-h-[600px]"
        >
          <span className="text-xs text-center font-bold text-red-950">
            Lorem, ipsum dolor sit amet.
          </span>
          <button
            className=""
            onClick={() => navigate(`${album._id}/sub-albums`)}
          >
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
    </>
  );
}

export default GalleryMain;
