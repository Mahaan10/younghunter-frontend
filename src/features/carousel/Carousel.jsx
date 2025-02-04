import { useEffect, useReducer } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";
import Loading from "../../ui/Loading";
import toast from "react-hot-toast";
import { useLanguage } from "../../context/useLanguageContext";
import useImages from "../../hooks/useImages";

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
  const { images, isLoading, isError, error } = useImages();
  const { language } = useLanguage();
  const [state, dispatch] = useReducer(carouselReducer, { activeItemIndex: 0 });

  const prevCarouselItemHandler = () => {
    if (!images.length) return
    dispatch({ type: "Prev", payload: images.length });
  };

  const nextCarouselItemHandeler = () => {
    if (!images.length) return
    dispatch({ type: "Next", payload: images.length });
  };

  const indicatorClickHandler = (id) => {
    const index = images.findIndex((image) => image._id === id);
    if (index !== -1) dispatch({ type: "SetIndex", payload: index });
  };

  useEffect(() => {
    //if (!images.length) return
    const carouselInterval = setInterval(() => {
      dispatch({ type: "Next", payload: images.length });
    }, 10000);

    return () => clearInterval(carouselInterval);
  }, [images]);

  if (isLoading) return <Loading />;
  if (isError) return toast.error(error.response.data.message);
  if (!images.length) return <p className="text-center">{language === "en" ? "No Images available!" : "عکسی یافت نشد!"}</p>
  const activeImage = images[state.activeItemIndex]


  return (
    <div className="w-full dark:bg-zinc-950 transition-all duration-300 py-10">
      <div className="flex items-center justify-center gap-x-8 text-sm pb-4 max-w-[500px] mx-auto">
        <button className="bg-green-600 adminRoleBtn text-neutral-200">
          {language === "en" ? "Add Image to Carousel" : "افزودن عکس به کاروسل"}
        </button>
        <button className="bg-red-600 adminRoleBtn text-neutral-200">
          {language === "en" ? "Delete Image from Carousel" : "حذف کردن عکس از کاروسل"}
        </button>
      </div>
      <div className="max-w-[500px] mx-auto bg-white shadow-3xl dark:shadow-neutral-600 dark:bg-neutral-200 flex items-center justify-center relative p-5 rounded-2xl transition-all duration-300">
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
                onClick={() => console.log(activeImage._id)}
              >
                <img
                  src={`${activeImage.url}`}
                  alt=""
                  className="object-contain shadow-3xl w-[326px] h-[456px]"
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
          <div
            className="flex items-center justify-center gap-x-3 filmstrip w-full sm:gap-x-6"
            style={{ direction: "ltr" }}
          >
            {images.map((img) => (
              <button key={img._id} onClick={() => indicatorClickHandler(img._id)}>
                <img
                  src={`${img.url}`}
                  alt=""
                  className={`border-2 border-transparent w-[70px] h-[100px] object-cover transition-opacity ${img._id === activeImage._id
                    ? "opacity-100"
                    : "opacity-30"
                    }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
