import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

function Login({ setSignUp }) {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      passwordConfirm: "",
    },
    validateOnMount: true,
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is required")
        .min(3, "Name is not valid"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Password must contain 8 characters")
        .required("Password is required"),
      phoneNumber: Yup.string()
        .required("Phone Number is required")
        .matches(/^[0-9]{11}$/, "Invalid Phone Number")
        .nullable(),
      passwordConfirm: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Password Confirmation is required"),
    }),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex items-center flex-col gap-y-3">
        <div className="flex flex-col w-[80%]">
          <label htmlFor="email" className="text-white mb-1">
            Email:
          </label>
          <input
            type="text"
            className="rounded-xl text-gray-900 border border-gray-100 bg-gray-100 hover:border-blue-500 focus:border-blue-500 focus:bg-gray-50 transition-all duration-300 ease-out focus:shadow-lg focus:shadow-blue-200"
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
            Password:
          </label>
          <input
            type="password"
            className="rounded-xl text-gray-900 border border-gray-100 bg-gray-100 hover:border-blue-500 focus:border-blue-500 focus:bg-gray-50 transition-all duration-300 ease-out focus:shadow-lg focus:shadow-blue-200"
            {...formik.getFieldProps("password")}
            name="password"
          />
          {formik.errors.password && formik.touched.password && (
            <div className="text-sm mt-1 font-bold text-red-600">
              {formik.errors.password}
            </div>
          )}
        </div>
        <div className="flex items-center text-xs gap-x-1">
          <span className="text-white">Don&apos; t have an account?</span>
          <Link
            onClick={() => setSignUp(true)}
            className="text-blue-600 underline"
          >
            Sign up
          </Link>
        </div>
        <div className="w-[80%] mt-2">
          <button
            type="submit"
            className="w-full px-4 py-3 font-bold text-lg rounded-xl transition-all duration-300 bg-blue-900 text-white hover:bg-blue-800"
            disabled={!formik.isValid}
          >
            Login
          </button>
        </div>
      </div>
    </form>
  );
}

export default Login;
