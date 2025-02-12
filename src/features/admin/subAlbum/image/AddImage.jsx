import useImages from "../../../../hooks/useImages";

function AddImage({ subAlbum, album }) {
  const { images } = useImages();
console.log("SubALbumId :" ,subAlbum._id)
console.log("ALbumId :" ,album._id)

  return (
    <>
    {images.map((image) => (
      <div key={image._id} className="flex items-center justify-between">
        <div className="flex gap-4">
          <img src={image.url} alt="" className="w-9 h-9"/>
        </div>
        <div className="">
          <button>Add</button>
        </div>
      </div>
    ))}
    </>
  )
}

export default AddImage;
