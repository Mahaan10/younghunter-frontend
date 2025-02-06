import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/useLanguageContext";
import useAlbums from "../../hooks/useAlbums";
import Loading from "../../ui/Loading";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { usePagination } from "../../context/usePaginationContext";
import Pagination from "../../ui/Pagination";
import { useSorting } from "../../context/useSortingContext";

function GalleryMain() {
  const { albums, isLoading, isError, error } = useAlbums();
  const { language } = useLanguage();
  const { sortOption } = useSorting()
  const navigate = useNavigate();
  const { currentPage, setTotalPages, pageSize } = usePagination();

  useEffect(() => {
    if (albums) setTotalPages(Math.ceil(albums.length / pageSize));
  }, [albums, pageSize, setTotalPages]);

  if (isLoading) return <Loading />;
  if (isError) return toast.error(error.response.data.message);

  // Sorting Albums based on newest or oldest
  const sortedAlbums = [...albums].sort((a, b) => {
    return sortOption === "new" ? new Date(b.createdAt) - new Date(a.createdAt) : new Date(a.createdAt) - new Date(b.createdAt)
  })

  // Slicing Albums for pagination based on 9 items per page
  const currentAlbums = sortedAlbums.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 min-[1119px]:grid-cols-3 gap-x-16 gap-y-4">
        {currentAlbums.map((album) => (
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
            <h1 className="font-bold text-2xl mx-2.5">{`${language === "en" ? album.title.en : album.title.fa
              }`}</h1>
          </div>
        ))}
      </div>
      {/* Pagination Controls */}
      {albums.length > pageSize && <Pagination />}
    </>
  );
}

export default GalleryMain;
