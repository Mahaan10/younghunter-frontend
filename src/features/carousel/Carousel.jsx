import useCarouselImages from "../../hooks/useCarouselImages";

function Carousel() {
  const { images, isLoading } = useCarouselImages();

  if (isLoading) return <div>...</div>

  console.log(images)
  return (
    <div>
      <img src={`${images[1].url}`} alt="" className="w-52"/>
      <p>{images[1].dateTaken}</p>
    </div>
  );
}

export default Carousel;
