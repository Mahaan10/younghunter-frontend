import { useState } from "react";
import { useLanguage } from "../../../context/useLanguageContext";
import useCreateAlbum from "../../../hooks/useCreateAlbum";
import { useForm } from "react-hook-form";
import InputTextField from "../../../ui/InputTextField";
import useEditAlbum from "../../../hooks/useEditAlbum";

function AlbumForm({ onClose, albumToEdit = {} }) {
  const { createAlbum, isCreating } = useCreateAlbum();
  const { editAlbum, isEditing } = useEditAlbum();
  const { language } = useLanguage();
  const { _id: editId } = albumToEdit;
  const isEditSession = Boolean(editId);

  const {
    title: {},
    imageCover,
  } = albumToEdit;

  let editValues = {};

  if (isEditSession) {
    editValues = {
      title: { en: data.enTitle, fa: data.faTitle },
      imageCover,
    };
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  //const [tags, setTags] = useState(prevTags || [])

  const onSubmit = (data) => {
    const newAlbum = {
      //title: { en: data.enTitle, fa: data.faTitle },
      ...data,
      title: { en: data.enTitle, fa: data.faTitle },
      imageCover,
      //imageCover: URL.createObjectURL(data.imageCover),
    };

    if (isEditSession) {
      editAlbum(
        { id: editId, newAlbum },
        {
          onSuccess: () => {
            onClose();
            reset();
          },
        }
      );
    } else {
      createAlbum(newAlbum, {
        onSuccess: () => {
          onClose(), reset();
        },
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
          <label htmlFor="imageCover" className="mb-1 block text-neutral-200">
            {language === "en" ? "Upload Image Cover" : "بارگذاری عکس کاور"}{" "}
            <span className="text-red-600">*</span>
          </label>
          <input
            type="file"
            /* {...register("file", {
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
            })} */
          />
          {errors.file && (
            <span className="text-red-600 block text-sm mt-2">
              {errors?.file?.message}
            </span>
          )}
        </div>
        <div className="w-[80%] mt-2">
          <button
            type="submit"
            className="w-full px-4 py-3 font-bold text-lg rounded-xl transition-all duration-300 bg-blue-900 text-white hover:bg-blue-800"
          >
            {isCreating || isEditing ? (
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

export default AlbumForm;
