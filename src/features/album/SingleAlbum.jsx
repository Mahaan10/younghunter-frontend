import Loading from "../../ui/Loading";
import toast from "react-hot-toast";
import { useLanguage } from "../../context/useLanguageContext";
import { useNavigate } from "react-router-dom";
import useAllSubAlbums from "../../hooks/useAllSubAlbumsForSingleAlbum";
import { useEffect } from "react";
import { usePagination } from "../../context/usePaginationContext";
import Pagination from "../../ui/Pagination";
import { useSorting } from "../../context/useSortingContext";
import { useGalleryContext } from "../../context/useGalleryContext";

function SingleAlbum() {
  const { isError, isLoading, subAlbums, error } = useAllSubAlbums();
  const { language } = useLanguage();
  const { sortOption } = useSorting();
  const navigate = useNavigate();
  const { currentPage, setTotalPages, pageSize } = usePagination();
  const { searchResults, value } = useGalleryContext();

  useEffect(() => {
    if (subAlbums) setTotalPages(Math.ceil(subAlbums.length / pageSize));
  }, [subAlbums, pageSize, setTotalPages]);

  if (isLoading) return <Loading />;
  if (isError) return toast.error(error.response.data.message);

  // Sorting Sub Albums based on newest or oldest
  const sortedSubAlbums = [...subAlbums].sort((a, b) => {
    return sortOption === "new"
      ? new Date(b.createdAt) - new Date(a.createdAt)
      : new Date(a.createdAt) - new Date(b.createdAt);
  });

  // Slicing Sub Albums for pagination based on 9 items per page
  const currentSubAlbums = sortedSubAlbums.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 min-[1119px]:grid-cols-3 gap-x-16 gap-y-4">
        {value.trim() ? ( // If the user has typed something, show search results
          searchResults.length > 0 ? (
            searchResults.map((subAlbum) => (
              <div
                key={subAlbum._id}
                className="flex flex-col shadow-3xl max-w-[300px] rounded-lg mx-auto py-3 gap-y-2 max-h-[600px]"
              >
                <button className="" onClick={() => navigate(subAlbum._id)}>
                  <img
                    src={subAlbum.imageCover}
                    className="object-contain shadow-3xl rounded-lg mx-auto w-[300px] h-[300px] bg-neutral-200"
                    alt=""
                  />
                </button>
                <h1 className="font-bold text-2xl mx-2.5">
                  {language === "en" ? subAlbum.title.en : subAlbum.title.fa}
                </h1>
              </div>
            ))
          ) : (
            //  Show message when no results are found
            <div className="flex items-center justify-center gap-x-10">
              <p className="text-gray-500 text-lg">
                {language === "en" ? "No results found" : "نتیجه‌ای یافت نشد"}
              </p>
              <button className="btn bg-gray-800" onClick={() => navigate(-1)}>
                <span>{language === "en" ? "Navigate Up" : "بازگشت"}</span>
              </button>
            </div>
          )
        ) : (
          //  If search is empty, show paginated sub-albums
          currentSubAlbums.map((subAlbum) => (
            <div
              key={subAlbum._id}
              className="flex flex-col shadow-3xl max-w-[300px] rounded-lg mx-auto py-3 gap-y-2 max-h-[600px]"
            >
              <button className="" onClick={() => navigate(subAlbum._id)}>
                <img
                  src={subAlbum.imageCover}
                  className="object-contain shadow-3xl rounded-lg mx-auto w-[300px] h-[300px] bg-neutral-200"
                  alt=""
                />
              </button>
              <h1 className="font-bold text-2xl mx-2.5">
                {language === "en" ? subAlbum.title.en : subAlbum.title.fa}
              </h1>
            </div>
          ))
        )}
      </div>
      {/* Pagination Controls */}
      {subAlbums.length > pageSize && <Pagination />}
    </>
  );
}

export default SingleAlbum;
