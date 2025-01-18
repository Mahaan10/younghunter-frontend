import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function HeaderHashlink({ children, to, onClose }) {
  const location = useLocation();

  const className = (hash) =>
    location.hash === hash ? `${hashLinkClass} text-black` : `${hashLinkClass}`;

  const hashLinkClass =
    "flex items-center transition-all duration-300 justify-center py-2 md:py-0 md:mt-0 mt-2 rounded-md md:hover:bg-white hover:bg-gray-500 md:bg-inherit hover:text-white md:hover:text-inherit";

  return (
    <li>
      <HashLink smooth to={to} onClick={onClose} className={className(`${to}`)}>
        {children}
      </HashLink>
    </li>
  );
}

export default HeaderHashlink;
