import { useLanguage } from "../../../context/useLanguageContext";
import { Controller, useForm } from "react-hook-form";
import InputTextField from "../../../ui/InputTextField";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useCreateSubAlbums from "../../../hooks/useCreateSubAlbums";
import useEditSubAlbum from "../../../hooks/useEditSubAlbum";

function SubAlbumForm({ onClose, album, subAlbumToEdit = {} }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const { createSubAlbum, isCreating } = useCreateSubAlbums();
  const { editSubAlbum, isEditing } = useEditSubAlbum();
  const { language } = useLanguage();
  const { _id: subAlbumEditId } = subAlbumToEdit;
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    control,
  } = useForm({ mode: "onBlur" });

  useEffect(() => {
    if (subAlbumEditId) {
      reset({
        enTitle: subAlbumToEdit.title.en,
        faTitle: subAlbumToEdit.title.fa,
        //imageCover: subAlbumToEdit.imageCover,
      });
    }
  }, [subAlbumToEdit, reset, subAlbumEditId]);

  const subAlbumImagePreview = selectedFile
    ? URL.createObjectURL(selectedFile)
    : subAlbumToEdit.url;

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("imageCover", selectedFile);
    formData.append("title[en]", data.enTitle);
    formData.append("title[fa]", data.faTitle);
    /* const newSubAlbum = {
      ...data,
      title: { en: data.enTitle, fa: data.faTitle },
      imageCover: data.imageCover,
    }; */

    if (subAlbumEditId) {
      await editSubAlbum(
        {
          albumId: album._id,
          subAlbumId: subAlbumEditId,
          newSubAlbum: formData,
        },
        {
          onSuccess: () => {
            toast.success(
              `${
                language === "en"
                  ? `Edit ${data.enTitle} successfully`
                  : `آلبوم ${data.faTitle} با موفقیت ویرایش شد`
              }`
            );
            onClose();
            reset();
          },
          onError: (error) => toast.error(error?.response?.data?.message),
        }
      );
    } else {
      await createSubAlbum(
        { albumId: album._id, newSubAlbum: formData },
        {
          onSuccess: () => {
            toast.success(
              `${
                language === "en"
                  ? `Create ${data.enTitle} successfully`
                  : `آلبوم ${data.faTitle} با موفقیت ایجاد شد`
              }`
            );
            onClose();
            reset();
          },

          onError: (error) => toast.error(error?.response?.data?.message),
        }
      );
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
          <div className="flex items-center justify-between">
            <label htmlFor="imageCover" className="mb-1 block text-neutral-200">
              {language === "en" ? "Upload Image" : "بارگذاری عکس"}{" "}
              <span className="text-red-600">*</span>
            </label>
            {subAlbumImagePreview && (
              <div className="">
                <img
                  src={subAlbumImagePreview}
                  alt=""
                  className="w-14 h-14 object-cover"
                />
              </div>
            )}
          </div>
          <Controller
            name="imageCover"
            control={control}
            rules={{
              required:
                language === "en"
                  ? "Image Cover is required"
                  : "عکس کاور ضروری است",
              validate: {
                acceptedFormats: (fileList) =>
                  fileList &&
                  fileList.type &&
                  (fileList.type === "image/jpeg" ||
                    fileList.type === "image/jpg")
                    ? true
                    : language === "en"
                    ? "Only JPG image is allowed!"
                    : "فقط فرمت JPG مجاز است!",
                fileSize: (fileList) =>
                  fileList && fileList.size <= 20 * 1024 * 1024
                    ? true
                    : language === "en"
                    ? "File size must be less than 20MB"
                    : "حجم فایل نباید بیشتر از 20 مگابایت باشد",
              },
            }}
            render={({ field: { onChange, ref } }) => (
              <input
                type="file"
                name="imageCover"
                accept="image/jpeg, image/jpg"
                className="inputTextField"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setSelectedFile(file);
                  onChange(file);
                }}
                ref={ref}
              />
            )}
          />

          {errors?.image?.message && (
            <span className="text-red-600 block text-sm mt-2">
              {errors?.image?.message}
            </span>
          )}
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
          {/* {errors.file && (
            <span className="text-red-600 block text-sm mt-2">
              {errors?.file?.message}
            </span>
          )} */}
        </div>
        <div className="w-[80%] mt-2">
          <button
            type="submit"
            disabled={!isValid}
            className="w-full px-4 py-3 font-bold text-lg rounded-xl transition-all duration-300 bg-blue-900 text-white hover:bg-blue-800"
          >
            {isCreating || isEditing ? (
              <h1 className="">...</h1>
            ) : subAlbumEditId ? (
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

export default SubAlbumForm;
