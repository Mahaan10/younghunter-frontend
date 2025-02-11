import { useLanguage } from "../../../context/useLanguageContext";
import useImages from "../../../hooks/useImages";
import Table from "../../../ui/Table";
import ImagesRow from "./imagesRow";

function ImagesTable() {
  const { images } = useImages();
  const { language } = useLanguage();


  if (!images.length)
    return (
      <p className="text-neutral-200">
        {language === "en"
          ? "There is no Image!"
          : "عکسی یافت نشد!"}
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
          <ImagesRow key={image._id} image={image} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ImagesTable;
