import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { url } from "../../constants/Apiurl";

export interface IExperience {
  category: string;
  title: string;
  description: string;
  fullName: string;
  status: boolean;
}

const Share = () => {
  const [experience, setExperience] = useState<IExperience>({
    category: "", // selected
    description: "",
    fullName: "",
    status: false, // selected
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

    if (experience.description.length < 100) {
      toast("Təcrübıniz haqqında məlumatı ətraflı yazın..", {
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
    } else {
      const url = `https://interviewsland-backend.onrender.com/api/v1/experiences/add`;
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(experience),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          if (data.status === "OK") {
            setCode(data.code);
          }
        })

        .catch((error) => {
          console.error("Error:", error);
        });

      setExperience({
        category: "", // selected
        description: "",
        fullName: "",
        status: false, // selected
        title: "",
      });
    }
  };

  return (
    <div
      id="poppins"
      className="bg-[#F8F9FB] w-full absolute top-0 left-0 h-screen pt-24 flex flex-col items-center"
    >
      {code.length > 0 && (
        <div
          id="ocean"
          className="fixed w-full h-screen right-0 top-0 bg-trasparent text-black z-10 
      flex items-center justify-center px-4 py-2 rounded"
        >
          <div className=" text-red-500 absolute top-0 left-0 w-full h-screen  bg-[#9b9b9b] opacity-50 "></div>
          <div className="text-black bg-white  px-12 py-12 rounded w-1/2 absolute flex flex-col z-100 ">
            <p id="ocean" className="text-base">
              Təbriklər elan uğurla bazamıza əlavə edildi! 🎉
              <br />
              <br />
              Növbəti mərhələdə elan əməkdaşlarımız tərəfindən dəyərləndilicək
              əgər uyğun hesab edilərsə saytda elanlar bölməsinə əlavə ediləcək!
              <br />
              <br />
              Elanınızın paylaşılıb,paylaşılmadığı və ya gözləmədə olub olmadığı
              haqda məlumatı aşağıdakı kodu
              <Link to="/" className="underline text-black px-1">
                Elan tap
              </Link>
              səhifəsində qeyd edərək görə bilərsiniz!
              <br />
              <br />
              Elanınızın kodu:
              <span className="bg-blue-600 text-white px-2 rounded py-1">
                {code}
              </span>
              <br />
              <br />
              <p className="text-red-600">
                Qeyd: kodunuzu itirməməyinizi tpvsiyyə edirik. Əks halda elanın
                cai vəziyyəti haqqında məlumatı ala bilməyəcəksiniz.
              </p>
              <br />
              <button
                onClick={() => setCode("")}
                className=" bg-blue-600 text-white px-5 py-2 rounded-sm"
              >
                Bağla
              </button>
            </p>
          </div>
        </div>
      )}
      <ToastContainer />

      <p id="ocean" className="text-4xl font-semibold text-black">
        Yeni elan:
      </p>
      <form className="mt-8 w-4/5 ">
        <div className="grid grid-cols-2 w-full gap-4 ">
          <div className="flex flex-col items-start col-span-1">
            <span className="text-xl text-black mb-3 px-1">Kateqoriya:</span>
            <select
              required
              className="bg-white text-black px-4 py-3 h-14 w-full rounded outline-none border-none "
              id="category"
              onChange={(e) => changeInputs(e)}
              value={experience.category}
            >
              {categories != null &&
                categories.map((category: { categoryname: string }) => {
                  return (
                    <option
                      key={Math.random()}
                      className="text-black text-base"
                      value={category.categoryname}
                    >
                      {category.categoryname}
                    </option>
                  );
                })}
            </select>
          </div>

          <div className="flex flex-col items-start col-span-1">
            <span className="text-xl text-black mb-3 px-1">Ad soyad</span>
            <input
              required
              className="bg-white poppins  px-4 py-3 h-14  w-full rounded outline-none border-none placeholder:text-[#4e4e4e]"
              id="fullName"
              placeholder="Adınızı daxil edin.."
              onChange={(e) => changeInputs(e)}
              value={experience.fullName}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 w-full gap-4 mt-12">
          <div className="flex flex-col items-start col-span-1">
            <span className="text-xl text-black mb-3 px-1">Başlıq:</span>
            <input
              required
              className="bg-white poppins placeholder:text-[#4e4e4e]  px-4 py-3 h-14 w-full rounded outline-none border-none "
              id="title"
              placeholder="Mətn üçün başlıq daxil edin.."
              onChange={(e) => changeInputs(e)}
              value={experience.title}
            />
          </div>
        </div>

        <div className="flex flex-col w-full  mt-12">
          <span className="text-xl text-black mb-3 px-1">Açıqlama:</span>
          <textarea
            required
            className="bg-white poppins w-full px-4 py-3 h-60  placeholder:text-[#4e4e4e] rounded outline-none border-none "
            id="description"
            placeholder="Ətraflı yazın.."
            onChange={(e) => changeInputs(e)}
            value={experience.description}
          />
        </div>

        <div className="mt-12 w-full items-center flex justify-center">
          <button
            id="poppins"
            onClick={(e) => sendExperience(e)}
            className="hover:bg-blue-600 text-base text-black
            transition duration-300
            bg-white hover:text-white
            px-6 py-3 rounded"
          >
            Paylaş
          </button>
        </div>
      </form>
    </div>
  );
};

export default Share;
