import { useForm } from "react-hook-form";
import useCreateImage from "../../../hooks/useCreateImage";
import { useLanguage } from "../../../context/useLanguageContext";
import InputTextField from "../../../ui/InputTextField";
import toast from "react-hot-toast";
import RadioInputGroup from "../../../ui/RadioInputGroup";

function CreateImageForm({ onClose }) {
  const { createNewImage, isPending } = useCreateImage();
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm();
  const { language } = useLanguage();

  const onSubmit = async (data) => {
    const newImage = {
      ...data,
      title: { en: data.enTitle, fa: data.faTitle },
      location: { en: data.enLocation, fa: data.faLocation },
      isFeaturedCarousel: data.isFeaturedCarousel === "yes" ? true : false,
      dateTaken: data.dateTaken,
      url: data.url,
      position: data.position,
    };

    await createNewImage(newImage, {
      onSuccess: () => {
        toast.success(
          `${
            language === "en"
              ? `Create ${data.enTitle} successfully`
              : `آلبوم ${data.faTitle} با موفقیت ایجاد شد`
          }`
        );
        reset();
        onClose();
      },
      onError: (error) => toast.error(error?.response?.data?.message),
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center flex-col gap-y-3">
        <div className="flex flex-col w-[80%]">
          <InputTextField
            label={language === "en" ? "English Title" : "عنوان به انگلیسی"}
            name="enTitle"
            register={register}
            required
            validationSchema={{
              required: `${
                language === "en" ? "Title is required" : "عنوان ضروری است"
              }`,
              minLength: {
                value: 3,
                message: `${
                  language === "en"
                    ? "Title must be atleast 3 character"
                    : "عنوان حداقل باید 3 کاراکتر باشد"
                }`,
              },
            }}
            errors={errors}
          />
        </div>
        <div className="flex flex-col w-[80%]">
          <InputTextField
            label={language === "en" ? "Persian Title" : "عنوان به فارسی"}
            name="faTitle"
            register={register}
            required
            validationSchema={{
              required: `${
                language === "en" ? "Title is required" : "عنوان ضروری است"
              }`,
              minLength: {
                value: 3,
                message: `${
                  language === "en"
                    ? "Title must be atleast 3 character"
                    : "عنوان حداقل باید 3 کاراکتر باشد"
                }`,
              },
            }}
            errors={errors}
          />
        </div>
        <div className="flex flex-col w-[80%]">
          <label htmlFor="url" className="mb-1 block text-neutral-200">
            {language === "en" ? "Upload Image" : "بارگذاری عکس"}{" "}
            <span className="text-red-600">*</span>
          </label>
          <InputTextField name="url" register={register} errors={errors} />
          {/* <input
            type="file"
            {...register("file", {
              required: `${
                language === "en"
                  ? "Image Cover is required"
                  : "عکس کاور ضروری است"
              }`,
              validate: {
                acceptedFormats: (file) =>
                  file && ["image/jpg"].includes(file[0]?.type),
                fileSize: (file) => file && file[0]?.size <= 20 * 1024 * 1024, //20MB limit
              },
            })}
          /> */}
          {errors.file && (
            <span className="text-red-600 block text-sm mt-2">
              {errors?.file?.message}
            </span>
          )}
        </div>
        <div className="flex flex-col w-[80%]">
          <InputTextField
            label={language === "en" ? "English Location" : "لوکیشن به انگلیسی"}
            name="enLocation"
            register={register}
            required
            validationSchema={{
              required: `${
                language === "en" ? "Location is required" : "لوکیشن ضروری است"
              }`,
              minLength: {
                value: 3,
                message: `${
                  language === "en"
                    ? "Location must be atleast 3 character"
                    : "لوکیشن حداقل باید 3 کاراکتر باشد"
                }`,
              },
            }}
            errors={errors}
          />
        </div>
        <div className="flex flex-col w-[80%]">
          <InputTextField
            label={language === "en" ? "Persian Location" : "لوکیشن به فارسی"}
            name="faLocation"
            register={register}
            required
            validationSchema={{
              required: `${
                language === "en" ? "Location is required" : "لوکیشن ضروری است"
              }`,
              minLength: {
                value: 3,
                message: `${
                  language === "en"
                    ? "Location must be atleast 3 character"
                    : "لوکیشن حداقل باید 3 کاراکتر باشد"
                }`,
              },
            }}
            errors={errors}
          />
        </div>
        <div className="flex flex-col w-[80%]">
          <InputTextField
            label={language === "en" ? "Date" : "تاریخ"}
            name="dateTaken"
            register={register}
            required
            validationSchema={{
              required: `${
                language === "en" ? "Date is required" : "تاریخ ضروری است"
              }`,
              minLength: {
                value: 3,
                message: `${
                  language === "en"
                    ? "Date must be atleast 4 character"
                    : "تاریخ حداقل باید 4 کاراکتر باشد"
                }`,
              },
            }}
            errors={errors}
          />
        </div>
        <div className="flex flex-col w-[80%]">
          <p className="text-neutral-200 text-center text-lg my-2">
            {language === "en"
              ? "What is the position of this image?"
              : "جهت این عکس چیست؟"}
          </p>
          <RadioInputGroup
            errors={errors}
            register={register}
            watch={watch}
            required
            configs={{
              name: "position",
              validationSchema: {
                required:
                  language === "en"
                    ? "Position is required!"
                    : "جهت ضروری است!",
              },
              options: [
                {
                  value: "vertical",
                  label: language === "en" ? "Vertical" : "عمودی",
                },
                {
                  value: "horizontal",
                  label: language === "en" ? "horizontal" : "افقی",
                },
              ],
            }}
          />
        </div>
        <div className="flex flex-col w-[80%]">
          <p className="text-neutral-200 text-center text-lg my-2">
            {language === "en"
              ? "Do you want to add this image to carousel?"
              : "آیا میخواهید این عکس به کاروسل اضافه گردد؟"}
          </p>
          <RadioInputGroup
            errors={errors}
            register={register}
            watch={watch}
            required
            configs={{
              name: "isFeaturedCarousel",
              validationSchema: {
                required:
                  language === "en"
                    ? "Selection is required!"
                    : "انتخاب !ضروری است",
              },
              options: [
                {
                  value: "yes",
                  label: language === "en" ? "Yes" : "بله",
                },
                {
                  value: "no",
                  label: language === "en" ? "No" : "خیر",
                },
              ],
            }}
          />
        </div>
        <div className="w-[80%] mt-2">
          <button
            type="submit"
            disabled={!isValid}
            className="w-full px-4 py-3 font-bold text-lg rounded-xl transition-all duration-300 bg-blue-900 text-white hover:bg-blue-800"
          >
            {isPending ? (
              <h1 className="">...</h1>
            ) : language === "en" ? (
              "Post"
            ) : (
              "ایجاد کردن"
            )}
          </button>
        </div>
      </div>
    </form>
  );
}

export default CreateImageForm;
