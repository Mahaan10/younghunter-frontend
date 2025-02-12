import { HiOutlineTrash } from "react-icons/hi";
import { useLanguage } from "../../../context/useLanguageContext";
import Table from "../../../ui/Table";
import { useState } from "react";
import Modal from "../../../ui/Modal";
import ConfirmDelete from "../../../ui/ConfirmDelete";
import useEditImage from "../../../hooks/useEditImage";
import toast from "react-hot-toast";

function CarouselRow({ image, index }) {
  const { editImage, isEditing } = useEditImage();
  const { language } = useLanguage();
  const [isDeleteOpen, setIsDeleteOpen] = useState();

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>
        <img src={image.url} alt="" className="w-9 h-9 mx-auto" />
      </td>
      <td>{image.title.en}</td>
      <td>{image.title.fa}</td>
      <td className="flex items-center justify-center gap-x-8">
        <button
          className="flex items-center justify-between btn bg-red-600"
          onClick={() => setIsDeleteOpen((prev) => !prev)}
        >
          <span>{language === "en" ? "Delete" : "حذف کردن"}</span>
          <HiOutlineTrash className="w-5 h-5" />
        </button>
      </td>

      {isDeleteOpen && (
        <Modal
          title={
            language === "en" ? "Delete from Carousel" : "پاک کردن از کاروسل"
          }
          onClose={() => setIsDeleteOpen(false)}
        >
          <ConfirmDelete
            englishTitle={image.title.en}
            persianTitle={image.title.fa}
            onClose={() => setIsDeleteOpen(false)}
            onConfirm={() =>
              editImage(
                {
                  imageId: image._id,
                  newImage: { ...image, isFeaturedCarousel: false },
                },
                {
                  onSuccess: () => {
                    setIsDeleteOpen(false);
                    toast.success(
                      `${
                        language === "en"
                          ? `You deleted ${image.title.en} from Carousel successfully!`
                          : `عکس ${image.title.fa} با موفقیت از کاروسل حذف شد!`
                      }`
                    );
                  },
                  onError: () => setIsDeleteOpen(false),
                }
              )
            }
            isRemoving={isEditing}
            disabled={false}
          ></ConfirmDelete>
        </Modal>
      )}
    </Table.Row>
  );
}

export default CarouselRow;
