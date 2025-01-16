import { NavLink } from "react-router-dom";

function HeaderNavlink({ to, onClose, children }) {
  const navlinkClass =
    "flex items-center transition-all duration-300 justify-center py-2 md:py-0 md:mt-0 mt-2 rounded-md md:hover:bg-white font-semibold";

  return (
    <li className="">
      <NavLink
        onClick={onClose}
        to={to}
        className={({ isActive }) =>
          isActive
            ? `${navlinkClass} bg-gray-700 md:underline md:underline-offset-13 md:bg-inherit md:text-black text-white hover:bg-gray-700`
            : `${navlinkClass} hover:bg-gray-500  md:hover:text-black hover:text-white`
        }
      >
        {children}
      </NavLink>
    </li>
  );
}

export default HeaderNavlink;
