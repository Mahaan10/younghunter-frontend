import { useLanguage } from "../../../context/useLanguageContext";
import { useForm } from "react-hook-form";
import InputTextField from "../../../ui/InputTextField";
import { useEffect } from "react";
import toast from "react-hot-toast";
import useCreateSubAlbums from "../../../hooks/useCreateSubAlbums";
import useEditSubAlbum from "../../../hooks/useEditSubAlbum";

function SubAlbumForm({ onClose, album, subAlbumToEdit = {} }) {
  const { createSubAlbum, isCreating } = useCreateSubAlbums();
  const { editSubAlbum, isEditing } = useEditSubAlbum();
  const { language } = useLanguage();
  const { _id: subAlbumEditId } = subAlbumToEdit;
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm();

  useEffect(() => {
    if (subAlbumEditId) {
      reset({
        enTitle: subAlbumToEdit.title.en,
        faTitle: subAlbumToEdit.title.fa,
        imageCover: subAlbumToEdit.imageCover,
      });
    }
  }, [subAlbumToEdit, reset, subAlbumEditId]);

  const onSubmit = (data) => {
    const newSubAlbum = {
      ...data,
      title: { en: data.enTitle, fa: data.faTitle },
      imageCover: data.imageCover,
    };

    if (subAlbumEditId) {
      editSubAlbum(
        {
          albumId: album._id,
          subAlbumId: subAlbumEditId,
          newSubAlbum: newSubAlbum,
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
      createSubAlbum(
        { albumId: album._id, newSubAlbum: newSubAlbum },
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
          <label htmlFor="imageCover" className="mb-1 block text-neutral-200">
            {language === "en" ? "Upload Image Cover" : "بارگذاری عکس کاور"}{" "}
            <span className="text-red-600">*</span>
          </label>
          <InputTextField
            name="imageCover"
            register={register}
            errors={errors}
          />
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
