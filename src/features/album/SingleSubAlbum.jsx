import toast from "react-hot-toast";
import useSingleSubAlbum from "../../hooks/useSingleSubAlbum";
import Loading from "../../ui/Loading";
import { useLanguage } from "../../context/useLanguageContext";
import { usePagination } from "../../context/usePaginationContext";
import { useEffect } from "react";
import Pagination from "../../ui/Pagination";
import { useSorting } from "../../context/useSortingContext";

function SingleSubAlbum() {
  const { subAlbum, error, isError, isLoading } = useSingleSubAlbum();
  const { language } = useLanguage();
  const { sortOption } = useSorting()
  const { currentPage, setTotalPages, pageSize } = usePagination();

  useEffect(() => {
    if (subAlbum) setTotalPages(Math.ceil(subAlbum.images.length / pageSize));
  }, [subAlbum, pageSize, setTotalPages]);

  if (isLoading) return <Loading />;
  if (isError) return toast.error(error.response.data.message);

  // Sorting Albums based on newest or oldest
  const sortedSubAlbumImages = [...subAlbum.images].sort((a, b) => {
    return sortOption === "new" ? new Date(b.dateTaken) - new Date(a.dateTaken) : new Date(a.dateTaken) - new Date(b.dateTaken)
  })

  // Slicing Albums for pagination based on 9 items per page
  const currentSubAlbumImages = sortedSubAlbumImages.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );


  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 min-[1119px]:grid-cols-3 gap-x-16 gap-y-4">
        {currentSubAlbumImages.map((subAlbumImgs) => (
          <div
            key={subAlbumImgs._id}
            className="flex flex-col shadow-3xl max-w-[300px] rounded-lg mx-auto py-3 gap-y-2 max-h-[600px]"
          >
            <span className="text-xs text-center font-bold text-red-950">
              Lorem, ipsum dolor sit amet.
            </span>
            <button className="" onClick={() => console.log(subAlbumImgs._id)}>
              <img
                src={subAlbumImgs.url}
                className={`object-contain shadow-3xl rounded-lg mx-auto w-[300px] h-[300px]`}
                alt=""
              />
            </button>
            <div className="flex items-center justify-between text-sm mx-2">
              <DateComponent date={subAlbumImgs.dateTaken} />
              <span>Location</span>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination Controls */}
      {subAlbum.images.length > pageSize && <Pagination />}
    </>
  );
}

export default SingleSubAlbum;



function formattedDate(isoString, language) {
  return new Date(isoString).toLocaleDateString(language === "en" ? "en-Us" : "fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })
}

function DateComponent({ date }) {
  const { language } = useLanguage()
  return <span>{formattedDate(date, language)}</span>
}