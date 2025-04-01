import { useForm, Controller } from "react-hook-form";
import useCreateImage from "../../../hooks/useCreateImage";
import { useLanguage } from "../../../context/useLanguageContext";
import InputTextField from "../../../ui/InputTextField";
import toast from "react-hot-toast";
import RadioInputGroup from "../../../ui/RadioInputGroup";
import useEditImage from "../../../hooks/useEditImage";
import { useEffect, useState } from "react";

function ImageForm({ onClose, imageToEdit = {} }) {
  const [selectedFile, setSelectedFile] = useState(null);
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

  useEffect(() => {
    if (editId) {
      reset({
        enTitle: imageToEdit.title.en,
        faTitle: imageToEdit.title.fa,
        enLocation: imageToEdit.location.name.en,
        faLocation: imageToEdit.location.name.fa,
        isFeaturedCarousel:
          imageToEdit.isFeaturedCarousel === true ? "yes" : "no",
        url: imageToEdit.imageUrl,
        position: imageToEdit.position,
        dateTaken: new Date(imageToEdit.dateTaken),
      });
    }
  }, [editId, imageToEdit, reset, language]);

  const onSubmit = async (data) => {
    if (!selectedFile) {
      toast.error(
        language === "en"
          ? "Please Upload a valid image"
          : "لطفا یک تصویر معتبر بارگذاری کنید"
      );
      console.log("Submit Data", data);
      console.log("Watch Date Taken:", watch("dateTaken"));
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);
    console.log("FormData image", formData.get("image"));

    try {
      const response = await fetch(
        "https://young-hunter.liara.run/api/v1/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      if (!response.ok) {
        console.log("UPLOAD Failed RESPONSE", response);
        toast.error(language === "en" ? "Upload Failed" : "بارگذاری انجام نشد");
      }
      const result = await response.json();
      const imageUrl = result.file.filename;
      console.log("Server Response", result);
      console.log("imageURL", imageUrl);

      const newImage = {
        title: { en: data.enTitle, fa: data.faTitle },
        location: { name: { en: data.enLocation, fa: data.faLocation } },
        isFeaturedCarousel: data.isFeaturedCarousel === "yes" ? true : false,
        dateTaken: new Date(data.dateTaken).toLocaleDateString(
          language === "en" ? "en-Us" : "fa-IR",
          {
            year: "numeric",
          }
        ),
        url: imageUrl,
        position: String(data.position),
      };
      console.log(newImage);
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
    } catch {
      toast.error(language === "en" ? "Upload Failed" : "بارگذاری انجام نشد");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      encType="multipart/form-data"
      method="post"
    >
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
                  setSelectedFile(e.target.files[0]);
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
            type="date"
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
                  label: language === "en" ? "vertical" : "عمودی",
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
