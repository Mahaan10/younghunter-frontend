import { useLanguage } from "../../../context/useLanguageContext";
import useImages from "../../../hooks/useImages";
import Table from "../../../ui/Table";
import ImageRow from "../subAlbum/image/ImageRow";

function ImagesTable() {
  const { images } = useImages();
  const { language } = useLanguage();


  if (!images.length)
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
        <th>{language === "en" ? "Is there include in carousel?" : "در کاروسل وجود دارد؟"}</th>
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
