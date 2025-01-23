import { HiUserCircle } from "react-icons/hi2";
import { useLanguage } from "../../context/useLanguageContext";

function About() {
  const { language } = useLanguage();
  return (
    <>
      <div className="flex items-center">
        <HiUserCircle className="size-32 text-gray-950" />
      </div>
      <div className="max-w-[300px] text-center mx-auto font-bold md:text-base text-sm">
        <h5>
          {language === "en"
            ? "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias tenetur accusamus totam officia saepe est ipsa sit earum maioresvelit!"
            : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."}
        </h5>
      </div>
    </>
  );
}

export default About;
