import About from "../../ui/About";
import Contact from "../../ui/Contact";

function Information() {
  return (
    <div className="flex flex-col items-center justify-evenly gap-x-5 max-w-[500px] mx-auto mt-8 md:flex-row">
      <div className="flex flex-col items-center" id="about">
        <About />
      </div>
      <div className="flex flex-col items-center mt-4 md:mt-0" id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default Information;
