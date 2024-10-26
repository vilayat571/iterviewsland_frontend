import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { url } from "../../constants/Apiurl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faExpand } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useAppDispatch, useAppSelector } from "../../redux/reducers/store";
import { sendExperienceText } from "../../redux/reducers/postExperience";

export interface IExperience {
  category: string;
  title: string;
  description?: string;
  fullName: string;
  status: boolean;
}

const Share = () => {
  const navigate = useNavigate();

  const [description, setDescription] = useState("");

  const [experience, setExperience] = useState<IExperience>({
    category: "", // Default empty value, placeholder will show initially
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
  const [categories, setCategories] = useState<{ categoryname: string }[]>([]);

  useEffect(() => {
    const urlApp = `${url}/categories`;
    fetch(urlApp)
      .then((res) => res.json())
      .then((data) => setCategories(data.categories));
  }, []);

  const dispatch = useAppDispatch();

  const loading = useAppSelector((state) => state.postExperience?.loading);

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

  const closePopup = () => {
    const survey1 = confirm(
      "Bağlamdan öncə! \nZəhmət olmasa, kodunu götürməyi unutma, çünki daha sonra təcrübə mətnini kod vasitəsi ilə tapacaqsan."
    );

    if (survey1) {
      const survey = "Bağlamaq istəyirsiniz?";

      if (survey) {
        setCode("");
      }
    }
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ size: [] }],
      ["link"],
    ],
  };

  const [showPopup, setShowPopup] = useState<boolean>(false);

  return (
    <div
      id="poppins"
      className="] w-full absolute top-0 left-0 h-screen pt-36 flex flex-col items-center"
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
          <div className="h-auto border-[rgb(30,41,60)] rounded border-[1.5px] w-1/2 py-6 px-6 flex flex-col items-start gap-0">
            <p
              id="ocean"
              className="text-white text-lg w-full flex items-center justify-between"
            >
              Asif Ibrahimov
            </p>
            <p className="text-slate-300 text-left text-base my-3">
              Iktex LLC şirkətində Python Backend Developer vakansiyası <br />{" "}
              üzrə müsahibədə oldum.
            </p>
            <p className=" text-slate-100 mb-3 text-left text-base">
              <span className="block mt-2">
                Müsahibə zamanı, Python-un əsas xüsusiyyətləri haqqında məlumat
                verməyim istəndi. Məsələn, "Python-da decorator-lar nədir?"
                sualı ilə qarşılaşdım və onların funksiya davranışını necə
                dəyişdirdiyini açıqladım.
              </span>
              <span className="block mt-2">
                {" "}
                Ayrıca, API-lərin yaradılması haqqında danışdım və RESTful
                xidmətlərdən necə istifadə etdiyimi izah etdim. Həmçinin, SQL və
                NoSQL verilənlər bazaları arasındakı fərqləri müzakirə etdik.{" "}
              </span>
              <span className="block mt-2">
                Müsahibə sonunda, komanda işinə və çevik inkişaf
                metodologiyalarına dair suallar verildi, bu da şirkət
                mədəniyyətini anlamağımda kömək etdi.
              </span>
            </p>
            <div className="mt-3 w-full flex items-center justify-between">
              <span className="bg-blue-800 text-white px-3 rounded-sm py-3 text-sm">
                Backend Developer{" "}
              </span>
            </div>
          </div>
        </div>
      )}
      {loading ? (
        <div className="w-full bg-black h-screen flex items-center justify-center fuxed top-0 left-0">
          Göndərilir
        </div>
      ) : (
        ""
      )}

      {!showPopup && code.length == 0 && (
        <button
          onClick={() => setShowPopup(!showPopup)}
          className="absolute top-6 z-20 right-6 border-[rgba(30,41,60)] border-[1px] text-base text-white bg-transparent 
            hover:bg-blue-700
            hover:text-white
            transition duration-300 px-5 py-4 rounded"
        >
          Örnək mətn
          <FontAwesomeIcon
            className="text-white ml-2 text-sm"
            icon={faExpand}
          />
        </button>
      )}

      {code && code.length > 0 && (
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
            <p id="poppins" className="text-xl">
              Təbriklər elan uğurla bazamıza əlavə edildi! 🎉
              <p className="text-xl mt-10">
                Elanınızın kodu:
                <span className="bg-blue-600 text-white px-2 ml-3 rounded-[3px] py-2">
                  {code}
                </span>
              </p>
              <br />
              <div className="mt-3">
                <button
                  onClick={() => closePopup()}
                  className=" hover:border-[rgba(30,41,60)] border-[1px] text-base text-slate-200 bg-blue-700 hover:text-white
                transition duration-300 px-6 py-3 hover:bg-transparent border-blue-700  rounded-[3px] "
                >
                  Bağla
                </button>
                <NavLink
                  to="/tecrubepaylash"
                  className=" border-[rgba(30,41,60)] border-[1px] text-base ml-3 text-slate-200 hover:bg-blue-700 hover:text-white
                transition duration-300 px-6 py-[14px] rounded-[3px] "
                >
                  Təcrübələr
                </NavLink>
              </div>
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
