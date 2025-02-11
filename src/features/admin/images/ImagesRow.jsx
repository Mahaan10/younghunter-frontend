import { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { TbPencilMinus } from "react-icons/tb";
import { useLanguage } from "../../../context/useLanguageContext";
import Table from "../../../ui/Table";
import Modal from "../../../ui/Modal";
import ConfirmDelete from "../../../ui/ConfirmDelete";
import useDeleteImage from "../../../hooks/useDeleteImage";
import toast from "react-hot-toast";
import ImageForm from "./ImageForm";

function ImagesRow({ image, index }) {
  const { deleteImage, isRemoving } = useDeleteImage();
  const { language } = useLanguage();
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td className="">
        <img src={image.url} alt="" className="w-9 h-9" />
      </td>
      <td>{image.isFeaturedCarousel === true ? "✔" : "❌"}</td>
      <td className="flex items-center justify-center gap-x-8">
        <button
          className="flex items-center justify-between btn bg-cyan-600"
          onClick={() => setIsEditOpen(true)}
        >
          <span>{language === "en" ? "Edit" : "ویرایش"}</span>
          <TbPencilMinus className="w-5 h-5" />
        </button>

        <button
          className="flex items-center justify-between btn bg-red-600"
          onClick={() => setIsDeleteOpen(true)}
        >
          <span>{language === "en" ? "Delete" : "حذف کردن"}</span>
          <HiOutlineTrash className="w-5 h-5" />
        </button>
      </td>
      {isEditOpen && (
        <Modal
          title={language === "en" ? "Edit Image" : "ویرایش عکس"}
          onClose={() => setIsEditOpen(false)}
        >
          <ImageForm imageToEdit={image} onClose={() => setIsEditOpen(false)} />
        </Modal>
      )}

      {isDeleteOpen && (
        <Modal
          title={language === "en" ? "Delete Image" : "حذف عکس"}
          onClose={() => setIsDeleteOpen(false)}
        >
          <ConfirmDelete
            englishTitle={image.title.en}
            persianTitle={image.title.fa}
            onClose={() => setIsDeleteOpen(false)}
            onConfirm={async () =>
              await deleteImage(image._id, {
                onSuccess: () => {
                  setIsDeleteOpen(false);
                  toast.success(
                    `${
                      language === "en"
                        ? `You deleted ${image.title.en} successfully!`
                        : `آلبوم ${image.title.fa} با موفقیت حذف شد!`
                    }`
                  );
                },
                onError: () => setIsDeleteOpen(false),
              })
            }
            isRemoving={isRemoving}
            disabled={false}
          />
        </Modal>
      )}
    </Table.Row>
  );
}

export default ImagesRow;
