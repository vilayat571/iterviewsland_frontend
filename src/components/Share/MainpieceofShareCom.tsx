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
    if (experience.fullName!=null && undefined && experience.fullName.length <= 8) {
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
      ["link"],
    ],
  };

  return (
    <>
      <ToastContainer />

      <p id="ocean" className=" xl:mt-0 lg:mt-0 md:mt-0 sm:mt-10  xl:text-4xl lg:text-4xl md:text-3xl sm:text-3xl font-semibold text-white">
        Yaz ✎ ⋆⑅˚₊
      </p>
      <form className="mt-6 xl:w-3/4 lg:w-3/4 sm:w-full px-3 md:w-full ">
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-full xl:gap-4 lg:gap-4 md:gap-2 sm:gap-2 ">
          <div className="flex flex-col items-start col-span-1">
            <select
              required
              className="bg-transparent placeholder:text-white border-[rgba(30,41,60)] border-[1px] text-white px-4 py-3 xl:h-[70px] lg:h-[70px] md:h-[70px] sm:h-14 w-full rounded outline-none"
              id="category"
              onChange={(e) => changeInputs(e)}
              value={experience.category}
            >
              <option value="" className="text-white" disabled>
                Sahə
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
              className="bg-transparent border-[rgba(30,41,60)] border-[1px] poppins text-white  px-4 py-3 xl:h-[70px] lg:h-[70px] md:h-[70px] sm:h-14  w-full rounded outline-none
               placeholder:text-slate-300"
              id="fullName"
              placeholder="Ad və ya ləqəb"
              onChange={(e) => changeInputs(e)}
              value={experience.fullName}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 w-full gap-4 mt-6">
          <div className="flex flex-col items-start col-span-1">
            <input
              required={true}
              className="bg-transparent border-[rgba(30,41,60)] border-[1px] poppins text-white placeholder:text-slate-300 
               px-4 py-3 xl:h-[70px] lg:h-[70px] md:h-[70px] sm:h-14 w-full rounded outline-none
               "
              id="title"
              placeholder="Vakansiya"
              onChange={(e) => changeInputs(e)}
              value={experience.title}
            />
          </div>
        </div>

        <div className="flex flex-col w-full mt-6">
          <ReactQuill
            placeholder="Təcrübəniz"
            value={description}
            className="xl:h-80 lg:h-80 md:h-60 sm:h-60 text-white "
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
           Göndər
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
            Geri
          </button>
        </div>
      </form>
    </>
  );
};

export default MainpieceofShareCom;
