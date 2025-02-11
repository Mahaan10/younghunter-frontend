import { useState } from "react";
import Table from "../../../../ui/Table";
import { useLanguage } from "../../../../context/useLanguageContext";
import { HiOutlineTrash } from "react-icons/hi";
import { TbPencilMinus } from "react-icons/tb";

function ImageRow({ subAlbum, image, index }) {
  const { language } = useLanguage();
  const [isSubAlbumImageDeleteOpen, setIsImageDeleteOpen] =
    useState(false);


  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>
        <img src={image.url} alt="" className="w-9 h-9" />
      </td>
      <td>
        {image.isFeaturedCarousel === true ? "✔" : "❌"}
      </td>
      <td className="flex items-center justify-center gap-x-8">
        <button
          className="flex items-center justify-between btn bg-cyan-600"
          onClick={() => setIsImageDeleteOpen(true)}
        >
          <span>{language === "en" ? "Edit" : "ویرایش"}</span>
          <TbPencilMinus className="w-5 h-5" />
        </button>

        <button
          className="flex items-center justify-between btn bg-red-600"
          onClick={() => setIsImageDeleteOpen(true)}
        >
          <span>{language === "en" ? "Delete" : "حذف کردن"}</span>
          <HiOutlineTrash className="w-5 h-5" />
        </button>
      </td>
    </Table.Row>
  );
}

export default ImageRow;
