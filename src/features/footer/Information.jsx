import About from "../../ui/About";
import Contact from "../../ui/Contact";

function Information() {
  return (
    <div className="flex flex-col  justify-evenly gap-x-5 w-full mx-auto mt-8 md:flex-row bg-gray-950 bg-opacity-70 p-4 dark:bg-white text-neutral-200 dark:text-black">
      <div className="flex items-center min-w-[300px]">
        <img src="/new image/IMG_2358.JPG" alt="" className="max-w-[388px]" />
      </div>
      <div className="flex flex-col items-center justify-between" id="about">
        <About />
      </div>
      <div className="flex flex-col justify-center items-center mt-4 md:mt-0" id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default Information;
