import { useLanguage } from "../../../context/useLanguageContext";
import useImages from "../../../hooks/useImages";
import Table from "../../../ui/Table";
import ImageRow from "../subAlbum/image/ImageRow";

function ImagesTable() {
  const { images } = useImages();
  const { language } = useLanguage();

  const filteredImagesBasedonCarouselFeatured = images.filter(
    (img) => img.isFeaturedCarousel === true
  );
console.log(images)
  //console.log(filteredImagesBasedonCarouselFeatured);
  if (images.length)
    return (
      <p>
        {language === "en"
          ? "There is no Images in this Sub Album!"
          : "عکسی در این زیر آلبوم یافت نشد!"}
      </p>
    );

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>{language === "en" ? "Images" : "عکس ها"}</th>
        <th>{language === "en" ? "Operations" : "عملیات"}</th>
      </Table.Header>
      <Table.Body>
        {images.map((image, index) => (
          <ImageRow key={image._id} image={image} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ImagesTable;
