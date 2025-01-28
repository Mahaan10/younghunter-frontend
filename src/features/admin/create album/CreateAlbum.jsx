import { useLanguage } from "../../../context/useLanguageContext";
import Modal from "../../../ui/Modal";
import CreateAlbumForm from "./CreateAlbumForm";

function CreateAlbum({ openModal, setOpenModal }) {
  const { language } = useLanguage();

  return (
    <>
      <button
        className="bg-green-600 adminRoleBtn max-w-40"
        onClick={() => setOpenModal(true)}
      >
        {language === "en" ? "Create New Album" : "افزودن آلبوم جدید"}
      </button>
      {openModal && (
        <Modal
          title={
            openModal && language === "en"
              ? "Create New Album"
              : "افزودن آلبوم جدید"
          }
          onClose={() => setOpenModal(false)}
        >
          <CreateAlbumForm onClose={() => setOpenModal(false)} />
        </Modal>
      )}
    </>
  );
}

export default CreateAlbum;
