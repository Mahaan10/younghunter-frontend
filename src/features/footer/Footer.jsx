import About from "./About";
import Contact from "./Contact";


function Footer() {
  return (
    <div className="flex flex-col items-center mt-8 border-b border-gray-300">
      <About />
      <Contact/>
    </div>
  );
}

export default Footer;
