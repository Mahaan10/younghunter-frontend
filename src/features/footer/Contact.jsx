import {
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";

function Contact() {
  return (
    <div className="flex items-center justify-center gap-x-4 mb-4 mt-2 w-full" id="contact">
        <button>
          <FaWhatsapp className="size-8 hover:opacity-100 opacity-50" />
        </button>
        <button>
          <FaInstagram className="size-8 hover:opacity-100 opacity-50" />
        </button>
        <button>
          <FaTelegram className="size-8 hover:opacity-100 opacity-50" />
        </button>
        <button>
          <FaXTwitter className="size-8 hover:opacity-100 opacity-50" />
        </button>
      </div>
  )
}

export default Contact