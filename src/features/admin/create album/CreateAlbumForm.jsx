import { useFormik } from "formik";
import { useLanguage } from "../../../context/useLanguageContext";
import useCreateAlbum from "../../../hooks/useCreateAlbum";

function CreateAlbumForm() {
  const { createAlbum, isCreating } = useCreateAlbum();
  const { language } = useLanguage();
  const formik = useFormik({
    //!!
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex items-center flex-col gap-y-3">
        <div className="flex flex-col w-[80%]">
          <label htmlFor="email" className="text-white mb-1">
            {language === "en" ? "Email:" : "ایمیل:"}
          </label>
          <input
            type="text"
            className="rounded-xl text-gray-900 border border-gray-100 bg-gray-100 hover:border-blue-500 focus:border-blue-500 focus:bg-gray-50 transition-all duration-300 ease-out focus:shadow-md focus:shadow-sky-500"
            {...formik.getFieldProps("email")}
            name="email"
          />
          {formik.errors.email && formik.touched.email && (
            <div className="text-sm mt-1 font-bold text-red-600">
              {formik.errors.email}
            </div>
          )}
        </div>

        <div className="flex flex-col w-[80%]">
          <label htmlFor="password" className="text-white mb-1">
            {language === "en" ? "Password:" : "کلمه عبور:"}
          </label>
          <input
            type="password"
            className="rounded-xl text-gray-900 border border-gray-100 bg-gray-100 hover:border-blue-500 focus:border-blue-500 focus:bg-gray-50 transition-all duration-300 ease-out focus:shadow-md focus:shadow-sky-500"
            {...formik.getFieldProps("password")}
            name="password"
          />
          {formik.errors.password && formik.touched.password && (
            <div className="text-sm mt-1 font-bold text-red-600">
              {formik.errors.password}
            </div>
          )}
        </div>
        <div className="w-[80%] mt-2">
          <button
            type="submit"
            className="w-full px-4 py-3 font-bold text-lg rounded-xl transition-all duration-300 bg-blue-900 text-white hover:bg-blue-800"
            disabled={!formik.isValid}
          >
            {isCreating ? (
              <h1 className="">...</h1>
            ) : language === "en" ? (
              "Login"
            ) : (
              "ورود"
            )}
          </button>
        </div>
      </div>
    </form>
  );
}

export default CreateAlbumForm;
