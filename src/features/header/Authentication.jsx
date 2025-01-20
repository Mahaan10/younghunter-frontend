import { useState } from "react";
import Modal from "../../ui/Modal";

import Login from "./Login";
import { useLanguage } from "../../context/useLanguageContext";

function Authentication() {
  const [openModal, setOpenModal] = useState(false);

  const { language } = useLanguage();

  return (
    <>
      <button
        className="text-sm font-semibold px-3 py-1 mx-2"
        onClick={() => setOpenModal(true)}
      >
        {language === "en" ? "Login" : "ورود"}
      </button>
      {openModal && (
        <Modal
          title={openModal && language === "en" ? "Login" : "ورود"}
          onClose={() => setOpenModal(false)}
        >
          <Login />
        </Modal>
      )}
    </>
  );
}

export default Authentication;
