import { useState } from "react";
import { useLanguage } from "../../../context/useLanguageContext";
import Table from "../../../ui/Table";
import { TbPencilMinus } from "react-icons/tb";
import Modal from "../../../ui/Modal";
import AlbumForm from "./AlbumForm";
import { HiOutlineTrash } from "react-icons/hi";
import ConfirmDelete from "../../../ui/ConfirmDelete";

function AlbumRow({ album, index }) {
  const { language } = useLanguage();
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{album.title.en}</td>
      <td>{album.title.fa}</td>
      <td>
        <div className="flex items-center justify-center   gap-x-8">
          <button
            className="flex items-center justify-between btn bg-cyan-600"
            onClick={() => setIsEditOpen(true)}
          >
            <span>{language === "en" ? "Edit" : "ویرایش"}</span>
            <TbPencilMinus className="w-5 h-5" />
          </button>
          {isEditOpen && (
            <Modal
              title={language === "en" ? "Edit Album" : "ویرایش آلبوم"}
              onClose={() => setIsEditOpen(false)}
            >
              <AlbumForm
                albumToEdit={album}
                onClose={() => setIsEditOpen(false)}
              />
            </Modal>
          )}

          <button
            className="flex items-center justify-between btn bg-red-600"
            onClick={() => setIsDeleteOpen(true)}
          >
            <span>{language === "en" ? "Delete" : "حذف کردن"}</span>
            <HiOutlineTrash className="w-5 h-5" />
          </button>
          {isDeleteOpen && (
            <Modal
              title={language === "en" ? "Delete Album" : "حذف آلبوم"}
              onClose={() => setIsDeleteOpen(false)}
            >
              <ConfirmDelete
                resourceName={
                  language === "en" ? album.title.en : album.title.fa
                }
                onClose={() => setIsDeleteOpen(false)}
                //onConfirm
                disabled={false}
              />
            </Modal>
          )}
        </div>
      </td>
    </Table.Row>
  );
}

export default AlbumRow;
