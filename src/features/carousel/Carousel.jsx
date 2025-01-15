import { useEffect, useState } from "react";
import useCarouselImages from "../../hooks/useCarouselImages";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";
import Loading from "../../ui/Loading";

function Carousel() {
  const { images, isLoading } = useCarouselImages();
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const prevCarouselItemHandler = () => {
    if (activeItemIndex !== 0) {
      setActiveItemIndex((prevItem) => prevItem - 1);
    } else {
      setActiveItemIndex(images.length - 1);
    }
  };

  const nextCarouselItemHandeler = () => {
    if (activeItemIndex === 3) {
      setActiveItemIndex(0);
    } else {
      setActiveItemIndex((prevItem) => prevItem + 1);
    }
  };

  const indicatorClickHandler = (id) => {
    setActiveItemIndex(id - 1);
  };

  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setActiveItemIndex((prevItem) => (prevItem + 1) % images.length);
    }, 5000);

    return () => clearInterval(carouselInterval);
  }, [setActiveItemIndex, images]);

  if (isLoading) return <Loading />;

  return (
    <div className="max-w-[500px] mt-10 mx-auto bg-white shadow-3xl flex items-center justify-center relative p-5 rounded-2xl">
      <div className="flex flex-col items-center gap-y-6 w-full">
        <div className="flex items-center justify-between">
          <button
            onClick={prevCarouselItemHandler}
            className="min-[475px]:min-w-[40px] min-w-[30px] min-[475px]:h-[40px] h-[30px] rounded-full flex items-center justify-center text-white bg-neutral-800 hover:text-black hover:bg-neutral-500 duration-200 absolute left-0 min-[475px]:left-7"
          >
            <FaCaretLeft className="min-[475px]:size-8 size-5" />
          </button>
          <div className="md:min-w-[300px] min-w-fit flex items-center justify-center h-full rounded-lg  bg-white">
            <button onClick={() => console.log(images[activeItemIndex]._id)}>
              <img
                src={`${images[activeItemIndex].url}`}
                alt=""
                className="object-contain shadow-3xl max-w-[326px] max-h-[456px]"
              />
            </button>
          </div>
          <button
            onClick={nextCarouselItemHandeler}
            className="min-[475px]:min-w-[40px] min-w-[30px] min-[475px]:h-[40px] h-[30px] rounded-full flex items-center justify-center text-white bg-neutral-800 hover:text-black hover:bg-neutral-500 duration-200 absolute right-0 min-[475px]:right-7"
          >
            <FaCaretRight className="min-[475px]:size-8 size-5" />
          </button>
        </div>
        <div className="flex items-center justify-center gap-x-3 filmstrip w-full sm:gap-x-6">
          {images.map((data) => (
            <button key={data._id}>
              <img
                src={`${data.url}`}
                alt=""
                className={`object-cover border-2 border-transparent sm:min-w-[70px] sm:min-h-[70px] ${
                  data._id === images[activeItemIndex]._id
                    ? "opacity-100"
                    : "opacity-30"
                }`}
                onClick={() => indicatorClickHandler(data._id)}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
