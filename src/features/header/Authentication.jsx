import { useState } from "react";
import Modal from "../../ui/Modal";

import Login from "./Login";
import { useLanguage } from "../../context/useLanguageContext";
import { FaChevronDown } from "react-icons/fa6";
import toast from "react-hot-toast";
import { useAdmin } from "../../context/useAdminContext";
import useAuth from "../../hooks/useAuth";

function Authentication() {
  const [openModal, setOpenModal] = useState(false);
  const {getLoggedIn, isLoggedIn} = useAuth()


  const { language } = useLanguage();
  const { isAdmin, isLoading, isError, error, users, setIsAdmin } = useAdmin();

  if (isError) return toast.error(error.response.data.message);
  //Loading component needs to be different!
  if (isLoading) return <div className="font-bold text-3xl px-3 w-28">...</div>;

  return (
    <>
        {/* need to be drop down for logout! */}
        <button
          className="text-sm font-semibold border border-gray-400 md:mx-2 md:w-28 px-3 py-1.5 rounded-xl shadow-md shadow-slate-800 dark:border-neutral-200 dark:shadow-transparent w-full mx-auto transition-all duration-300"
          onClick={() => setOpenModal(true)}
        >
          {language === "en" ? "Login" : "ورود"}
        </button>

        {/* <button className="px-3 md:w-28 text-sm font-bold flex items-center justify-between">
          <span>{users[0].name}</span>
          <FaChevronDown className="size-3" />
        </button> */}

      {openModal && (
        <Modal
          title={openModal && language === "en" ? "Login" : "ورود"}
          onClose={() => setOpenModal(false)}
        >
          <Login setOpenModal={setOpenModal} />
        </Modal>
      )}
    </>
  );
}

export default Authentication;
