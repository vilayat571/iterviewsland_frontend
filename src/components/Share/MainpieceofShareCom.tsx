import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { IExperience } from "../../pages/Questions/Share";
import { url } from "../../constants/Apiurl";
import { toast, ToastContainer } from "react-toastify";
import { useAppDispatch } from "../../redux/reducers/store";
import { sendExperienceText } from "../../redux/reducers/postExperience";
import { useNavigate } from "react-router-dom";

const MainpieceofShareCom: React.FC<{
  setCode: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setCode }) => {
  const [description, setDescription] = useState("");

  const [experience, setExperience] = useState<IExperience>({
    category: "", // Default empty value, placeholder will show initially
    fullName: "",
    status: false,
    title: "",
  });

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const changeInputs = (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setExperience({ ...experience, [e.target.id]: e.target.value });
  };

  const [categories, setCategories] = useState<{ categoryname: string }[]>([]);

  useEffect(() => {
    const urlApp = `${url}/categories`;
    fetch(urlApp)
      .then((res) => res.json())
      .then((data) => setCategories(data.categories));
  }, []);

  const sendExperience = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    // Validate category
    if (!experience.category) {
      toast("Kateqoriyanı seçin.", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        style: {
          backgroundColor: "red",
          color: "white",
          fontFamily: "Poppins",
          zIndex: "999",
        },
      });
      return; // Stop execution if validation fails
    }

    // Validate full name length
    if (experience.fullName.length <= 8) {
      toast("Adınız 8 simvoldan çox olmalıdır.", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        style: {
          backgroundColor: "red",
          color: "white",
          fontFamily: "Poppins",
          zIndex: "999",
        },
      });
      return; // Stop execution if validation fails
    }

    // Validate title length
    if (experience.title.length <= 25) {
      toast("Başlıq 25 simvoldan çox olmalıdır.", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        style: {
          backgroundColor: "red",
          color: "white",
          fontFamily: "Poppins",
          zIndex: "999",
        },
      });
      return; // Stop execution if validation fails
    }

    // Validate description length
    if (description.length < 100) {
      toast("Təcrübəniz haqqında məlumatı ətraflı yazın.", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        style: {
          backgroundColor: "red",
          color: "white",
          fontFamily: "Poppins",
          zIndex: "999",
        },
      });
      return; // Stop execution if validation fails
    }

    // If all validations pass, send the experience
    dispatch(sendExperienceText({ formData: experience, description }))
      .then((data) => {
        if (data.payload.status === "OK") {
          setCode(data.payload.code);
        }
        setExperience({
          category: "",
          fullName: "",
          status: false,
          title: "",
        });
        setDescription("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // Reset experience form after successful submission
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ size: [] }],
      ["link"],
    ],
  };

  return (
    <>
      <ToastContainer />

      <p id="ocean" className="text-4xl font-semibold text-white">
        Yaz ✎ ⋆⑅˚₊
      </p>
      <form className="mt-8 w-3/4">
        <div className="grid grid-cols-2 w-full gap-4 ">
          <div className="flex flex-col items-start col-span-1">
            <select
              required
              className="bg-transparent placeholder:text-white border-[rgba(30,41,60)] border-[1px] text-white px-4 py-3 h-[70px] w-full rounded outline-none"
              id="category"
              onChange={(e) => changeInputs(e)}
              value={experience.category}
            >
              <option value="" className="text-white" disabled>
                Kateqoriya seçin
              </option>{" "}
              {/* Placeholder */}
              {categories != null &&
                categories?.map((category: { categoryname: string }) => (
                  <option
                    key={category.categoryname}
                    className="text-white text-base"
                    value={category.categoryname}
                  >
                    {category.categoryname}
                  </option>
                ))}
            </select>
          </div>

          <div className="flex flex-col items-start col-span-1">
            <input
              required={true}
              className="bg-transparent border-[rgba(30,41,60)] border-[1px] poppins text-white  px-4 py-3 h-[70px]  w-full rounded outline-none
               placeholder:text-slate-300"
              id="fullName"
              placeholder="Ad və soyadınızı daxil edin.."
              onChange={(e) => changeInputs(e)}
              value={experience.fullName}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 w-full gap-4 mt-6">
          <div className="flex flex-col items-start col-span-1">
            <input
              required={true}
              className="bg-transparent border-[rgba(30,41,60)] border-[1px] poppins text-white placeholder:text-slate-300  px-4 py-3 h-[70px] w-full rounded outline-none
               "
              id="title"
              placeholder="Təcrübənizə uyğun başlıq daxil edin.."
              onChange={(e) => changeInputs(e)}
              value={experience.title}
            />
          </div>
        </div>

        <div className="flex flex-col w-full mt-6">
          <ReactQuill
            placeholder="Təcrübəniz haqqında ətraflı yazın.."
            value={description}
            className="h-80 text-white "
            id="description"
            modules={modules}
            onChange={setDescription}
          />
        </div>

        <div className="mt-20 w-full gap-4 items-center flex justify-center">
          <button
                    aria-label="Send Button"

            id="poppins"
            onClick={(e) => sendExperience(e)}
            className=" hover:bg-transparent bg-blue-600 text-base text-white
            transition duration-300
            border-[rgba(30,41,60)] border-[1px] hover:text-white
            px-5 py-4 rounded"
          >
            Mətni göndər
          </button>
          <button
                    aria-label="Go back Button"

            id="poppins"
            onClick={() => navigate("/")}
            className=" bg-transparent hover:bg-blue-600 text-base text-white
            transition duration-300
            border-[rgba(30,41,60)] border-[1px] hover:text-white
            px-5 py-4 rounded"
          >
            Geri dön
          </button>
        </div>
      </form>
    </>
  );
};

export default MainpieceofShareCom;
