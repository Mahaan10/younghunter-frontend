import { useTranslation } from "react-i18next";
import { HiUserCircle } from "react-icons/hi2";

function About() {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-center w-full md:border-b gap-x-10  md:border-gray-300 pb-4" id="about">
      <div className="">
        <HiUserCircle className="size-32 text-gray-950" />
      </div>
      <div className="max-w-[300px] text-balance font-bold md:text-base text-sm">
        <h5>{t("about")}</h5>
      </div>
    </div>
  );
}

export default About;
