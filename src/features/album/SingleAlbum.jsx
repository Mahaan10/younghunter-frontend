import Loading from "../../ui/Loading";
import toast from "react-hot-toast";
import useSingleAlbum from "../../hooks/useSingleAlbum";
import { useLanguage } from "../../context/useLanguageContext";
import { useNavigate } from "react-router-dom";

function SingleAlbum() {
  const { isError, isLoading, album, error } = useSingleAlbum();
  const { language } = useLanguage();
  const navigate = useNavigate();

  if (isLoading) return <Loading />;
  if (isError) return toast.error(error.response.data.message);

  return (
    <>
      {album.subAlbums.map((subAlbum) => (
        <div
          key={subAlbum._id}
          className="flex flex-col shadow-3xl max-w-[300px] rounded-lg mx-auto py-3 gap-y-2 max-h-[600px]"
        >
          <span className="text-xs text-center font-bold text-red-950">
            Lorem, ipsum dolor sit amet.
          </span>
          <button className="" onClick={() => navigate(subAlbum._id)}>
            <img
              src={subAlbum.imageCover}
              className={`object-contain shadow-3xl rounded-lg mx-auto w-[300px] h-[300px]`}
              alt=""
            />
          </button>
          <h1 className="font-bold text-2xl mx-2.5">{`${
            language === "en" ? subAlbum.title.en : subAlbum.title.fa
          }`}</h1>
        </div>
      ))}
    </>
  );
}

export default SingleAlbum;
