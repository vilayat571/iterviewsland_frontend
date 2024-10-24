import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { url } from "../../constants/Apiurl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faExpand } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export interface IExperience {
  category: string;
  title: string;
  description: string;
  fullName: string;
  status: boolean;
}

const Share = () => {
  const navigate = useNavigate();

  const [experience, setExperience] = useState<IExperience>({
    category: "", // Default empty value, placeholder will show initially
    description: "",
    fullName: "",
    status: false,
    title: "",
  });

  const changeInputs = (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setExperience({ ...experience, [e.target.id]: e.target.value });
  };

  const [code, setCode] = useState("");
  const [categories, setCategories] = useState(null);

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
    if (experience.description.length < 100) {
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
    const url = `https://interviewsland-backend.onrender.com/api/v1/experiences/add`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(experience),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "OK") {
          setCode(data.code);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // Reset experience form after successful submission
    setExperience({
      category: "",
      description: "",
      fullName: "",
      status: false,
      title: "",
    });
  };

  const closePopup = () => {
    const survey = confirm(
      "Bağlamdan öncə! Kodunu götürməyi unutma, çünki təcrübə mətnin kod vasitəsi ilə tapacaqsan. "
    );
    if (survey) {
      setCode("");
    }
  };

  const [showPopup, setShowPopup] = useState<boolean>(false);

  return (
    <div
      id="poppins"
      className="] w-full absolute top-0 left-0 h-screen pt-40 flex flex-col items-center"
    >
      {showPopup && (
        <div
          id="ocean"
          className="fixed w-full h-screen right-0 top-0 bg-[#0E1527] text-white z-10 
      flex items-center justify-center px-4 py-2 rounded"
        >
          <button
            onClick={() => setShowPopup(!showPopup)}
            className=" absolute top-8 z-50 right-8 border-[rgba(30,41,60)] border-[1px] text-sm text-white hover:bg-transparent bg-blue-700
                 hover:text-white
                transition duration-300 px-6 py-3 rounded-[3px] "
          >
            <FontAwesomeIcon className="text-white" icon={faArrowLeft} />
          </button>
          text
        </div>
      )}

    {!showPopup && <button
        onClick={() => setShowPopup(!showPopup)}
        className=" absolute top-6 z-50 right-6 border-[rgba(30,41,60)] border-[1px] text-sm text-white bg-transparent 
            hover:bg-blue-700
                 hover:text-white
                transition duration-300 px-5 py-4 rounded"
      >
        Örnək mətn{" "}
        <FontAwesomeIcon className="text-white ml-1" icon={faExpand} />
      </button>
    }
      {code.length > 0 && (
        <div
          id="ocean"
          className="fixed w-full h-screen right-0 top-0 bg-[#0E1527] text-white z-10 
      flex items-center justify-center px-4 py-2 rounded"
        >
          <button
            onClick={() => closePopup()}
            className=" absolute top-8 z-50 right-8 border-[rgba(30,41,60)] border-[1px] text-sm text-white hover:bg-transparent bg-blue-700
                 hover:text-white
                transition duration-300 px-6 py-3 rounded-[3px] "
          >
            <FontAwesomeIcon className="text-white" icon={faArrowLeft} />
          </button>
          <div className=" text-red-500 absolute top-0 left-0 w-full h-screen  bg-[#0E1527] opacity-50 "></div>
          <div className="text-white bg-transparent border-[rgba(30,41,60)] border-[1px]  px-12 py-12 rounded w-1/2 absolute flex flex-col z-100 ">
            <p id="poppins" className="text-lg">
              Təbriklər elan uğurla bazamıza əlavə edildi! 🎉
              <br />
              <br />
              <p className="text-lg">
                Elanınızın kodu:
                <span className="bg-blue-600 text-white px-2 ml-3 rounded-[3px] py-2">
                  {code}
                </span>
              </p>
              <br />
              <button
                onClick={() => closePopup()}
                className=" border-[rgba(30,41,60)] border-[1px] text-base text-slate-200 hover:bg-blue-700 hover:text-white
                transition duration-300 px-6 py-3 rounded-[3px] "
              >
                Bağla
              </button>
            </p>
          </div>
        </div>
      )}
      <ToastContainer />

      <p id="ocean" className="text-4xl font-semibold text-white">
        Yaz ✎ ⋆⑅˚₊
      </p>
      <form className="mt-8 w-3/4">
        <div className="grid grid-cols-2 w-full gap-4 ">
          <div className="flex flex-col items-start col-span-1">
            <select
              required
              className="bg-transparent placeholder:text-white border-[rgba(30,41,60)] border-[1px] text-white px-4 py-3 h-16 w-full rounded outline-none"
              id="category"
              onChange={(e) => changeInputs(e)}
              value={experience.category}
            >
              <option value="" className="text-white" disabled>
                Kateqoriya seçin
              </option>{" "}
              {/* Placeholder */}
              {categories != null &&
                categories.map((category: { categoryname: string }) => (
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
              className="bg-transparent border-[rgba(30,41,60)] border-[1px] poppins text-white  px-4 py-3 h-16  w-full rounded outline-none
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
              className="bg-transparent border-[rgba(30,41,60)] border-[1px] poppins text-white placeholder:text-slate-300  px-4 py-3 h-16 w-full rounded outline-none
               "
              id="title"
              placeholder="Təcrübənizə uyğun başlıq daxil edin.."
              onChange={(e) => changeInputs(e)}
              value={experience.title}
            />
          </div>
        </div>

        <div className="flex flex-col w-full mt-6">
          <textarea
            required
            className="bg-transparent border-[rgba(30,41,60)] border-[1px] poppins text-white w-full px-5 py-5 h-80  placeholder:text-slate-300 rounded outline-none
             "
            id="description"
            placeholder="Təcrübəniz haqqında ətraflı yazın.."
            onChange={(e) => changeInputs(e)}
            value={experience.description}
          />
        </div>

        <div className="mt-12 w-full gap-4 items-center flex justify-center">
          <button
            id="poppins"
            onClick={(e) => sendExperience(e)}
            className=" hover:bg-transparent bg-white text-base text-black
            transition duration-300
            border-[rgba(30,41,60)] border-[1px] hover:text-white
            px-5 py-4 rounded"
          >
            Mətni göndər
          </button>
          <button
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
    </div>
  );
};

export default Share;
