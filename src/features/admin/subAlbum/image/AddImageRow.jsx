import { useState } from "react";
import { TbPencilMinus } from "react-icons/tb";
import Table from "../../../../ui/Table";
import { useLanguage } from "../../../../context/useLanguageContext";

function AddImageRow({ image, index }) {
  const { language } = useLanguage();

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td className="">
        <img src={image.url} alt="" className="w-9 h-9 mx-auto" />
      </td>
      <td>{image.title.en}</td>
      <td>{image.title.fa}</td>
      <td className="flex items-center justify-center gap-x-8">
        <button
          className="flex items-center justify-between btn bg-green-600"
          onClick=""
        >
          <span>{language === "en" ? "Add" : "افزودن"}</span>
          <TbPencilMinus className="w-5 h-5" />
        </button>
      </td>
    </Table.Row>
  );
}

export default AddImageRow;
