import { useState } from "react";
import Modal from "../../ui/Modal";
import SignUp from "./SignUp";
import { useTranslation } from "react-i18next";
import Login from "./Login";

function Authentication() {
  const [openModal, setOpenModal] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <button
        className="text-sm font-semibold px-3 py-1"
        onClick={() => setOpenModal(true)}
      >
        {t("valid")}
      </button>
      {openModal && (
        <Modal
          title={signUp ? t("signUp") : t("login")}
          onClose={() => setOpenModal(false)}
        >
          {signUp ? (
            <SignUp setSignUp={setSignUp} />
          ) : (
            <Login setSignUp={setSignUp} />
          )}
        </Modal>
      )}
    </>
  );
}

export default Authentication;
