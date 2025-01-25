import { NavLink } from "react-router-dom";

function FooterNavlink({ to, children }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navlinkClass =
    "transition-all duration-300 w-24 px-2 py-1 flex items-center justify-start md:mt-2 rounded-md";

  return (
      <NavLink
        onClick={scrollToTop}
        to={to}
        className={({ isActive }) =>
          isActive
            ? `${navlinkClass} bg-black dark:bg-neutral-200`
            : `${navlinkClass}`
        }
      >
        {children}
      </NavLink>
  );
}

export default FooterNavlink;
