import { useFormik } from "formik";
import * as Yup from "yup";
import { useLanguage } from "../../context/useLanguageContext";
import useUsers from "../../hooks/useUsers";
import toast from "react-hot-toast";

function Login({ setIsAdmin, setOpenModal }) {
  const { users, error, isError, isLoading } = useUsers();
  const { language } = useLanguage();
  // need to modify new Loading component!
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validateOnMount: true,
    onSubmit: (values) => {
      const findAdmin = users.filter(
        (user) => user.email === values.email && user.role === "admin"
      );
      if (findAdmin.length === 0) {
        toast.error("Only Admin can Login!");
        setOpenModal(false);
        setIsAdmin(false);
      } else {
        toast.success(`Welcome ${findAdmin[0].name}`);
        setIsAdmin(true);
        setOpenModal(false);
      }
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email(
          `${language === "en" ? "Invalid email format" : "ایمیل نامعتبر است"}`
        )
        .required(
          `${language === "en" ? "Email is required" : " ایمیل الزامیست"}`
        ),
      password: Yup.string()
        .min(
          8,
          `${
            language === "en"
              ? "Password must contain atleast 8 characters"
              : "کلمه عبور باید حداقل ۸ کاراکتر باشد"
          }`
        )
        .required(
          `${language === "en" ? "Password is required" : "کلمه عبور الزامیست"}`
        ),
    }),
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
            {isLoading ? (
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

export default Login;
