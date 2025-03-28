import { useForm, Controller } from "react-hook-form";
import useCreateImage from "../../../hooks/useCreateImage";
import { useLanguage } from "../../../context/useLanguageContext";
import InputTextField from "../../../ui/InputTextField";
import toast from "react-hot-toast";
import RadioInputGroup from "../../../ui/RadioInputGroup";
import useEditImage from "../../../hooks/useEditImage";
import { useEffect, useState } from "react";

function ImageForm({ onClose, imageToEdit = {} }) {
  const [imageBase64, setImageBase64] = useState("");
  const { createNewImage, isPending: isCreating } = useCreateImage();
  const { editImage, isEditing } = useEditImage();
  const { _id: editId } = imageToEdit;
  const {
    register,
    reset,
    handleSubmit,
    watch,
    control,
    formState: { errors, isValid },
  } = useForm();
  const { language } = useLanguage();

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        console.log(reader.result);
        setImageBase64(reader.result);
      };
    }
  };

  useEffect(() => {
    if (editId) {
      reset({
        enTitle: imageToEdit.title.en,
        faTitle: imageToEdit.title.fa,
        enLocation: imageToEdit.location.name.en,
        faLocation: imageToEdit.location.name.fa,
        isFeaturedCarousel:
          imageToEdit.isFeaturedCarousel === true ? "yes" : "no",
        url: imageToEdit.url,
        position: imageToEdit.position,
        dateTaken: new Date(imageToEdit.dateTaken).toLocaleDateString(
          language === "en" ? "en-Us" : "fa-IR",
          {
            year: "numeric",
          }
        ),
      });
    }
  }, [editId, imageToEdit, reset, language]);

  const onSubmit = async (data) => {
    if (!imageBase64) {
      toast.error(
        language === "en"
          ? "Please Upload a valid image"
          : "لطفا یک تصویر معتبر بارگذاری کنید"
      );
      return;
    }
    const newImage = {
      title: { en: data.enTitle, fa: data.faTitle },
      location: { name: { en: data.enLocation, fa: data.faLocation } },
      isFeaturedCarousel: data.isFeaturedCarousel === "yes" ? true : false,
      dateTaken: data.dateTaken,
      url: imageBase64,
      position: data.position,
    };

    if (editId) {
      editImage(
        { imageId: editId, newImage },
        {
          onSuccess: () => {
            toast.success(
              `${
                language === "en"
                  ? `Edit ${data.enTitle} successfully`
                  : `عکس ${data.faTitle} با موفقیت ویرایش شد`
              }`
            );
            onClose();
            reset();
          },
          onError: (error) => toast.error(error?.response?.data?.message),
        }
      );
    } else {
      await createNewImage(newImage, {
        onSuccess: () => {
          toast.success(
            `${
              language === "en"
                ? `Create ${data.enTitle} successfully`
                : `عکس ${data.faTitle} با موفقیت ایجاد شد`
            }`
          );
          reset();
          onClose();
        },
        onError: (error) => toast.error(error?.response?.data?.message),
      });
    }
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
          {/* <InputTextField name="url" register={register} errors={errors} /> */}
          <Controller
            name="url"
            control={control}
            rules={{
              required:
                language === "en"
                  ? "Image Cover is required"
                  : "عکس کاور ضروری است",
              validate: {
                acceptedFormats: (fileList) =>
                  fileList?.[0] &&
                  (fileList[0]?.type === "image/jpeg" ||
                    fileList[0]?.type === "image/jpg")
                    ? true
                    : language === "en"
                    ? "Only JPG image is allowed!"
                    : "فقط فرمت JPG مجاز است!",
                fileSize: (fileList) =>
                  fileList && fileList[0]?.size <= 20 * 1024 * 1024
                    ? true
                    : language === "en"
                    ? "File size must be less than 20MB"
                    : "حجم فایل نباید بیشتر از 20 مگابایت باشد",
              },
            }}
            render={({ field }) => (
              <input
                type="file"
                accept="image/*"
                className="inputTextField"
                onChange={(e) => {
                  handleFileChange(e);
                  field.onChange(e.target.files);
                }}
                ref={field.ref}
              />
            )}
          />

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
            {isCreating || isEditing ? (
              <h1 className="">...</h1>
            ) : editId ? (
              language === "en" ? (
                "Save Changes"
              ) : (
                "ذخیره تغییرات"
              )
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

export default ImageForm;
