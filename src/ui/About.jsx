import { useLanguage } from "../context/useLanguageContext";

function About() {
  const { language } = useLanguage();
  return (
    <>
      <div className="flex items-center md:pt-6 pt-3">
        <img
          src="/new image/OK1.jpg"
          alt=""
          className="w-[250px] h-[250px] rounded-full"
        />
      </div>
      <div className="max-w-[300px] md:pb-28 pt-10 text-center mx-auto font-bold md:text-base text-sm">
        <h5>
          {language === "en"
            ? "See the world from my camera lenz! I'm Ali Zolghadr, a street photographer! Welcome to my profetional world."
            : "از لنز دوربین من به دنیا نگاه کن! من علی ذوالقدر هستم، یک عکاس خیابانی! به دنیای کاری من خوش آمدید."}
        </h5>
      </div>
    </>
  );
}

export default About;
