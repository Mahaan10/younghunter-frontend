import { useGalleryContext } from "../../context/useGalleryContext";
import useAlbums from "../../hooks/useAlbums";
//import useCarouselImages from "../../hooks/useCarouselImages";
import Loading from "../../ui/Loading";
import GalleryNavbar from "./GalleryNavbar";
import { TbAlbum } from "react-icons/tb";

function GalleryMain({ albumIndex }) {
  const { setIsOpen } = useGalleryContext();
  //const { images, isLoading } = useCarouselImages();
  const { albums, isLoading } = useAlbums();


  return (
    <>
      <div className="bg-gray-950 bg-opacity-70 shadow-sm shadow-gray-500 mt-1 mb-5 flex items-center justify-center relative">
        <GalleryNavbar />

        <button
          className=" text-gray-200 hover:text-gray-300 mx-4"
          onClick={() => setIsOpen(true)}
        >
          <TbAlbum className="size-10" />
        </button>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="rounded-2xl shadow-3xl  gap-y-4 p-5 max-w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 min-[1119px]:grid-cols-3">
          {albums[albumIndex].subAlbums.map((album) => (
            <div
              key={album._id}
              className="flex flex-col shadow-3xl max-w-[300px] rounded-lg mx-auto py-3 gap-y-2 max-h-[600px]"
            >
              <span className="text-xs text-center font-bold text-red-950">
                Lorem, ipsum dolor sit amet.
              </span>
              <button className="" onClick={() => console.log(album._id)}>
                <img
                  //src={img.url}
                  className={`object-contain shadow-3xl rounded-lg mx-auto w-[300px] h-[300px]`}
                  alt=""
                />
              </button>
              <h1 className="font-bold text-2xl ml-2.5">Title</h1>
              <h2 className="ml-2.5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit blanditiis.
              </h2>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default GalleryMain;
