import { useEffect, useState } from "react";
import { HiArrowCircleUp } from "react-icons/hi";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
// need to add some animation to the button!!!!
  return (
    isVisible && (
      <button onClick={scrollToTop} className="fixed bottom-0 right-0">
        <HiArrowCircleUp className="w-14 h-14" />
      </button>
    )
  );
}

export default ScrollToTopButton;
