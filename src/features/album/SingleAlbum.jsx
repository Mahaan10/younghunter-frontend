import Loading from "../../ui/Loading";
import toast from "react-hot-toast";
import { useLanguage } from "../../context/useLanguageContext";
import { useNavigate } from "react-router-dom";
import useAllSubAlbums from "../../hooks/useAllSubAlbumsForSingleAlbum";
import { useEffect } from "react";
import { usePagination } from "../../context/usePaginationContext";
import { toPersianNumbers } from "../../utils/toPersianNumbers";

function SingleAlbum() {
  const { isError, isLoading, subAlbums, error } = useAllSubAlbums();
  const { language } = useLanguage();
  const navigate = useNavigate();
  const {
    currentPage,
    totalPages,
    setPage,
    nextPage,
    previousPage,
    setTotalPages,
    pageSize,
  } = usePagination();

  useEffect(() => {
    if (subAlbums) setTotalPages(Math.ceil(subAlbums.length / pageSize));
  }, [subAlbums, pageSize, setTotalPages]);

  if (isLoading) return <Loading />;
  if (isError || !subAlbums) return toast.error(error.response.data.message);

  const currentSubAlbums = subAlbums.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 min-[1119px]:grid-cols-3 gap-x-16 gap-y-4">
        {currentSubAlbums.map((subAlbum) => (
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
      </div>
      {/* Pagination Controls */}
      {subAlbums.length > pageSize && (
        <div className="flex justify-center mt-6 gap-2">
          <button
            onClick={previousPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
          >
            {language === "en" ? "Previous" : "صفحه قبلی"}
          </button>
          {/* Display page numbers */}
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <button
                key={page}
                onClick={() => setPage(page)}
                className={`px-4 py-2 rounded ${
                  currentPage === page
                    ? "bg-gray-950 bg-opacity-90 text-neutral-200"
                    : "bg-gray-300 text-gray-700"
                }`}
              >
                {language === "en" ? page : toPersianNumbers(page)}
              </button>
            )
          )}
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
          >
            {language === "en" ? "Next" : "صفحه بعدی"}
          </button>
        </div>
      )}
    </>
  );
}

export default SingleAlbum;
