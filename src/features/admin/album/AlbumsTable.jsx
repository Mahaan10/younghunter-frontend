import { useLanguage } from "../../../context/useLanguageContext";
import useAlbums from "../../../hooks/useAlbums";
import Table from "../../../ui/Table";
import AlbumRow from "./AlbumRow";

function AlbumsTable() {
  const { albums } = useAlbums();
  const { language } = useLanguage();

  if (!albums.length)
    return (
      <p>{language === "en" ? "There is no Album!" : "آلبومی یافت نشد!"}</p>
    );

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>
          {language === "en" ? "English Title" : "عنوان به انگلیسی"}
        </th>
        <th>
          {language === "en" ? "Persian Title" : "عنوان به فارسی"}
        </th>
        <th>{language === "en" ? "Operations" : "عملیات"}</th>
      </Table.Header>
      <Table.Body>
        {albums.map((album, index) => (
          <AlbumRow key={album._id} album={album} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default AlbumsTable;
