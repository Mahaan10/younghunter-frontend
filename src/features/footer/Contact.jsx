import {
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";

function Contact() {
  return (
    <>
      <div className="flex w-full gap-x-3" id="contact">
        <button className="btn bg-[#25d366]">
          <span className="text-[12px]">WhatsApp</span>
          <FaWhatsapp className="w-5 h-5" />
        </button>
        <button className="btn bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]">
          <span className="text-[12px]">Instagram</span>
          <FaInstagram className="w-5 h-5" />
        </button>
      </div>
      <hr className="w-full mt-2 h-[1px] bg-gradient-to-r from-black via-[rgba(0,0,0,0.75)] to-black" />
      <div className="flex w-full gap-x-3 mt-2">
        <button className="btn bg-[#24a1de]">
          <span className="text-[12px]">Telegram</span>
          <FaTelegram className="w-5 h-5" />
        </button>
        <button className="btn bg-black">
          <span className="text-[12px]">Twitter</span>
          <FaXTwitter className="w-5 h-5" />
        </button>
      </div>
    </>
  );
}

export default Contact;
