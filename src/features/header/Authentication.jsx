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
        className="text-sm font-semibold border border-gray-400 md:mx-2 md:w-28 px-3 py-1.5 rounded-xl shadow-md shadow-slate-800 dark:border-neutral-200 dark:shadow-transparent w-full mx-auto transition-all duration-300"
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
