import About from "../../ui/About";
import Contact from "../../ui/Contact";

function Information() {
  return (
    <div className="flex flex-col justify-evenly w-full mx-auto md:flex-row bg-gray-950 bg-opacity-65 py-4 dark:bg-opacity-90 text-black dark:text-neutral-200">
      <div className="hidden md:flex items-center min-w-[300px]">
        <img src="/new image/IMG_2358.JPG" alt="" className="max-w-[388px]" />
      </div>
      <div className="flex flex-col items-center justify-between" id="about">
        <About />
      </div>
      <div
        className="flex flex-col justify-center items-center mt-8 md:mt-0"
        id="contact"
      >
        <Contact />
      </div>
    </div>
  );
}

export default Information;
