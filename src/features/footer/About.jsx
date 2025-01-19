import { HiUserCircle } from "react-icons/hi2";
import { useLanguage } from "../../context/useLanguageContext";

function About() {
  const { language } = useLanguage();
  return (
    <div
      className="flex items-center justify-center w-full md:border-b gap-x-10  md:border-gray-300 pb-4 mt-8"
      id="about"
    >
      <div className="">
        <HiUserCircle className="size-32 text-gray-950" />
      </div>
      <div className="max-w-[300px] text-balance font-bold md:text-base text-sm">
        <h5>
          {language === "en"
            ? "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias tenetur accusamus totam officia saepe est ipsa sit earum maioresvelit, voluptates consectetur. Voluptatibus magnam quidem possimus tenetur doloremque adipisci voluptatem!"
            : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد."}
        </h5>
      </div>
    </div>
  );
}

export default About;
