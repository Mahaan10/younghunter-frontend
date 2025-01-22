import { useEffect, useReducer } from "react";
import useCarouselImages from "../../hooks/useCarouselImages";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";
import Loading from "../../ui/Loading";

const carouselReducer = (state, { type, payload }) => {
  switch (type) {
    case "Next":
      return {
        ...state,
        activeItemIndex: (state.activeItemIndex + 1) % payload,
      };
    case "Prev":
      return {
        ...state,
        activeItemIndex:
          state.activeItemIndex === 0 ? payload - 1 : state.activeItemIndex - 1,
      };
    case "SetIndex":
      return {
        ...state,
        activeItemIndex: payload,
      };
    default:
      return state;
  }
};

function Carousel() {
  const { images, isLoading, isError } = useCarouselImages();
  const [state, dispatch] = useReducer(carouselReducer, { activeItemIndex: 0 });

  const prevCarouselItemHandler = () => {
    dispatch({ type: "Prev", payload: images.length });
  };

  const nextCarouselItemHandeler = () => {
    dispatch({ type: "Next", payload: images.length });
  };

  const indicatorClickHandler = (id) => {
    const index = images.findIndex((image) => image._id === id);
    dispatch({ type: "SetIndex", payload: index });
  };

  useEffect(() => {
    const carouselInterval = setInterval(() => {
      dispatch({ type: "Next", payload: images.length });
    }, 10000);

    return () => clearInterval(carouselInterval);
  }, [images]);

  if (isLoading) return <Loading />;
  if(isError) return <p>Error</p>

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
            <button
              onClick={() => console.log(images[state.activeItemIndex]._id)}
            >
              <img
                src={`${images[state.activeItemIndex].url}`}
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
          {images.map((img) => (
            <button key={img._id}>
              <img
                src={`${img.url}`}
                alt=""
                className={`object-cover border-2 border-transparent sm:min-w-[70px] sm:min-h-[70px] ${
                  img._id === images[state.activeItemIndex]._id
                    ? "opacity-100"
                    : "opacity-30"
                }`}
                onClick={() => indicatorClickHandler(img._id)}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
