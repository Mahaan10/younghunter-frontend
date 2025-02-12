import { useLanguage } from "../../../context/useLanguageContext";
import useImages from "../../../hooks/useImages";
import Table from "../../../ui/Table";
import CarouselRow from "./CarouselRow";

function CarouselTable() {
  const { images } = useImages();
  const { language } = useLanguage();

  const carouselImages =
    images && images.filter((img) => img.isFeaturedCarousel === true);

  if (!carouselImages.length)
    return (
      <p>
        {language === "en"
          ? "There is Image in Carousel!"
          : "!عکسی در کاروسل یافت نشد!"}
      </p>
    );

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>{language === "en" ? "Images" : "عکس ها"}</th>
        <th>{language === "en" ? "English Title" : "عنوان به انگلیسی"}</th>
        <th>{language === "en" ? "Persian Title" : "عنوان به فارسی"}</th>
        <th>{language === "en" ? "Operations" : "عملیات"}</th>
      </Table.Header>
      <Table.Body>
        {carouselImages.map((image, index) => (
          <CarouselRow key={image._id} image={image} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default CarouselTable;
