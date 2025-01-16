import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function HeaderHashlink({ children, to, onClose }) {
  const location = useLocation();

  const className = (hash) =>
    location.hash === hash
      ? `${hashLinkClass} bg-gray-700 md:underline md:underline-offset-13 md:bg-inherit md:text-black text-white hover:bg-gray-700`
      : `${hashLinkClass} hover:bg-gray-500  md:hover:text-black hover:text-white`;

  const hashLinkClass =
    "flex items-center transition-all duration-300 justify-center py-2 md:py-0 md:mt-0 mt-2 rounded-md md:hover:bg-white";

  return (
    <li>
      <HashLink smooth to={to} onClick={onClose} className={className(`${to}`)}>
        {children}
      </HashLink>
    </li>
  );
}

export default HeaderHashlink;
