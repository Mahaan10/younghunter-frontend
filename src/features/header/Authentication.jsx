import { useState } from "react";
import Modal from "../../ui/Modal";
import SignUp from "./SignUp";
import Login from "./Login";
import { useLanguage } from "../../context/useLanguageContext";

function Authentication() {
  const [openModal, setOpenModal] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const { language } = useLanguage();

  return (
    <>
      <button
        className="text-sm font-semibold px-3 py-1"
        onClick={() => setOpenModal(true)}
      >
        {language === "en" ? "Sign Up / Login" : "ورود / عضویت"}
      </button>
      {openModal && (
        <Modal
          title={
            signUp && language === "en"
              ? "Sign Up"
              : signUp && language === "fa"
              ? "عضویت"
              : !signUp && language === "en"
              ? "Login"
              : "ورود"
          }
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
