import { NavLink } from "react-router-dom";

function FooterNavlink({ to, children }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navlinkClass =
    "flex items-center flex-col transition-colors duration-300 justify-center px-2 py-1 mt-2 rounded-md";

  return (
    <li className="">
      <NavLink
        onClick={scrollToTop}
        to={to}
        className={({ isActive }) =>
          isActive ? `${navlinkClass} bg-black rounded-md` : `${navlinkClass}`
        }
      >
        {children}
      </NavLink>
    </li>
  );
}

export default FooterNavlink;
