import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

function SignUp({ setSignUp }) {
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
          <label htmlFor="name" className="text-white mb-1">
            Name:
          </label>
          <input
            type="text"
            className="rounded-xl text-gray-900 border border-gray-100 bg-gray-100 hover:border-blue-500 focus:border-blue-500 focus:bg-gray-50 transition-all duration-300 ease-out focus:shadow-lg focus:shadow-blue-200"
            {...formik.getFieldProps("name")}
            name="name"
          />
          {formik.errors.name && formik.touched.name && (
            <div className="text-sm mt-1 font-bold text-red-600">
              {formik.errors.name}
            </div>
          )}
        </div>
        <div className="flex flex-col w-[80%]">
          <label htmlFor="email" className="text-white mb-1">
            Email:
          </label>
          <input
            type="email"
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
          <label htmlFor="phoneNumber" className="text-white mb-1">
            Phone Number:
          </label>
          <input
            type="text"
            className="rounded-xl text-gray-900 border border-gray-100 bg-gray-100 hover:border-blue-500 focus:border-blue-500 focus:bg-gray-50 transition-all duration-300 ease-out focus:shadow-lg focus:shadow-blue-200"
            {...formik.getFieldProps("phoneNumber")}
            name="phoneNumber"
          />
          {formik.errors.phoneNumber && formik.touched.phoneNumber && (
            <div className="text-sm mt-1 font-bold text-red-600">
              {formik.errors.phoneNumber}
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

        <div className="flex flex-col w-[80%]">
          <label htmlFor="password" className="text-white mb-1">
            Password Confirm:
          </label>
          <input
            type="password"
            className="rounded-xl text-gray-900 border border-gray-100 bg-gray-100 hover:border-blue-500 focus:border-blue-500 focus:bg-gray-50 transition-all duration-300 ease-out focus:shadow-lg focus:shadow-blue-200"
            {...formik.getFieldProps("passwordConfirm")}
            name="passwordConfirm"
          />
          {formik.errors.passwordConfirm && formik.touched.passwordConfirm && (
            <div className="text-sm mt-1 font-bold text-red-600">
              {formik.errors.passwordConfirm}
            </div>
          )}
        </div>
        <div className="flex items-center text-xs gap-x-1">
          <span className="text-white">Already have an account?</span>
          <Link
            onClick={() => setSignUp(false)}
            className="text-blue-600 underline"
          >
            Login
          </Link>
        </div>
        <div className="w-[80%] mt-2">
          <button
            type="submit"
            className="w-full px-4 py-3 font-bold text-lg rounded-xl transition-all duration-300 bg-blue-900 text-white hover:bg-blue-800"
            disabled={!formik.isValid}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default SignUp;
