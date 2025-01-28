import { Modal } from "flowbite-react";
import { useLanguage } from "../../../context/useLanguageContext";
import CreateAlbumForm from "./CreateAlbumForm";

function CreateAlbum({ openModal, setOpenModal }) {
  const { language } = useLanguage();

  const clickHandler = () => {
    setOpenModal(!openModal)
    console.log(openModal)
  }
  return (
    <>
      <button
        className="bg-green-600 adminRoleBtn max-w-40"
        onClick={clickHandler}
      >
        {language === "en" ? "Create New Album" : "افزودن آلبوم جدید"}
      </button>
      {openModal && (
        <Modal title="Create">
          <CreateAlbumForm/>
        </Modal>
      )}
    </>
  );
}

export default CreateAlbum;
