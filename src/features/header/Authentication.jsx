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
        className="text-sm font-semibold border border-gray-400 md:mx-2 md:w-24 py-1.5 rounded-lg shadow-md shadow-slate-800 dark:shadow-neutral-500 w-full mx-auto"
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
