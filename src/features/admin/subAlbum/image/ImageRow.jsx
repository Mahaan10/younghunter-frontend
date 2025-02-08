import { useState } from "react";
import Table from "../../../../ui/Table";
import { useLanguage } from "../../../../context/useLanguageContext";
import { HiOutlineTrash } from "react-icons/hi";

function ImageRow({ subAlbum, image, index }) {
  const { language } = useLanguage();
  const [isSubAlbumImageDeleteOpen, setIsSubAlbumImageDeleteOpen] =
    useState(false);
    console.log(image)

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>
        <img src={image.url} alt="" className="w-9 h-9" />
      </td>
      <td className="flex items-center justify-center gap-x-8">
        <button
          className="flex items-center justify-between btn bg-red-600"
          onClick={() => setIsSubAlbumImageDeleteOpen(true)}
        >
          <span>{language === "en" ? "Delete" : "حذف کردن"}</span>
          <HiOutlineTrash className="w-5 h-5" />
        </button>
      </td>
    </Table.Row>
  );
}

export default ImageRow;
