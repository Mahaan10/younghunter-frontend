import { useLanguage } from "../../../context/useLanguageContext";
import useImages from "../../../hooks/useImages";
import Table from "../../../ui/Table";
import CarouselRow from "./CarouselRow";

function CarouselAddImageTable() {
  const { images } = useImages();
  const { language } = useLanguage();

  const notIncludeImages =
    images && images.filter((img) => img.isFeaturedCarousel === false);

  if (!notIncludeImages.length)
    return (
      <p>
        {language === "en"
          ? "There is no Image!"
          : "!عکسی یافت نشد!"}
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
        {notIncludeImages.map((image, index) => (
          <CarouselRow key={image._id} image={image} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default CarouselAddImageTable;
