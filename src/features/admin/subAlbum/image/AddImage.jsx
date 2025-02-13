import { useLanguage } from "../../../../context/useLanguageContext";
import useImages from "../../../../hooks/useImages";
import Table from "../../../../ui/Table";
import AddImageRow from "./AddImageRow";

function AddImage({ subAlbum, album }) {
  const { images } = useImages();
  const { language } = useLanguage();

  return (
    <>
      <Table>
        <Table.Header>
          <th>#</th>
          <th>{language === "en" ? "Images" : "عکس ها"}</th>
          <th>{language === "en" ? "English Title" : "عنوان به انگلیسی"}</th>
          <th>{language === "en" ? "Persian Title" : "عنوان به فارسی"}</th>
          <th>{language === "en" ? "Operations" : "عملیات"}</th>
        </Table.Header>
        <Table.Body>
          {images &&
            images.map((image, index) => (
              <AddImageRow
                key={image._id}
                image={image}
                index={index}
                subAlbum={subAlbum}
                album={album}
              />
            ))}
        </Table.Body>
      </Table>
    </>
  );
}

export default AddImage;
