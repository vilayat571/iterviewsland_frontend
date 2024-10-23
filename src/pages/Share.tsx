import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../Layout/Layout";
import { url } from "../constants/Apiurl";

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

  const sendExperience = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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
      const url = `http://localhost:3000/api/v1/experiences/add`;
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify("Experience"),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
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
    <Layout>
      <div className=" w-full px-4 mt-24 flex flex-col items-center">
        {code.length > 0 && (
          <div
            className="fixed w-full h-screen right-0 top-0 bg-trasparent text-white z-10 
      flex items-center justify-center px-4 py-2 rounded"
          >
            <div className=" text-red-500 absolute top-0 left-0 w-full h-screen  bg-[#9b9b9b] opacity-50 "></div>
            <div className="text-black bg-white px-12 py-12 rounded w-1/2 absolute flex flex-col z-100 ">
              <p className="text-base">
                Təbriklər elan uğurla bazamıza əlavə edildi! 🎉
                <br />
                <br />
                Növbəti mərhələdə elan əməkdaşlarımız tərəfindən dəyərləndilicək
                əgər uyğun hesab edilərsə saytda elanlar bölməsinə əlavə
                ediləcək!
                <br />
                <br />
                Elanınızın paylaşılıb,paylaşılmadığı və ya gözləmədə olub
                olmadığı haqda məlumatı aşağıdakı kodu{" "}
                <Link to="/" className="underline text-red-500 px-1">
                  Elan tap
                </Link>{" "}
                səhifəsində qeyd edərək görə bilərsiniz!
                <br />
                <br />
                Elanınızın kodu:{" "}
                <span className="bg-green-500 text-white px-2 rounded py-1">
                  {code}
                </span>
                <br />
                <br />
                <p className="text-red-600">
                  Qeyd: kodunuzu itirməməyinizi tpvsiyyə edirik. Əks halda
                  elanın cai vəziyyəti haqqında məlumatı ala bilməyəcəksiniz.
                </p>
                <br />
                <button
                  onClick={() => setCode("")}
                  className=" bg-red-600 text-white px-5 py-2 rounded-sm"
                >
                  Bağa
                </button>
              </p>
            </div>
          </div>
        )}
        <ToastContainer />

        <p className="text-4xl font-semibold text-black">Yeni elan:</p>
        <form className="mt-8 w-full ">
          <div className="grid grid-cols-2 w-full gap-4 ">
            <div className="flex flex-col items-start col-span-1">
              <span className="text-lg mb-2">Kateqoriya:</span>
              <select
                required
                className="bg-white px-4 py-3 h-14 w-full rounded outline-none border-none "
                id="category"
                onChange={(e) => changeInputs(e)}
                value={experience.category}
              >
                {categories!=null && categories.map((category) => {
                  return (
                    <option key={Math.random()} value={category.value}>
                      {category.label}
                    </option>
                  );
                })}
              </select>

              </div>
            </div>

          <div className="grid grid-cols-2 w-full gap-4 mt-12">
            <div className="flex flex-col items-start col-span-1">
              <span className="text-lg mb-2">Ad və soyad:</span>
              <input
                required
                className="bg-white px-4 py-3 h-14 w-full rounded outline-none border-none "
                id="fullName"
                placeholder="Məs: Polad Həşimov.."
                value={experience.fullName}
              />
            </div>


            <div className="flex flex-col items-start col-span-1">
              <span className="text-lg mb-2">Ad və soyad:</span>
              <input
                required
                className="bg-white px-4 py-3 h-14 w-full rounded outline-none border-none "
                id="fullName"
                placeholder="Məs: Polad Həşimov.."
                value={experience.title}
              />
            </div>

   
          </div>

          <div className="flex flex-col w-full  mt-12">
            <span className="text-lg mb-2">Ərazi:</span>
            <textarea
              required
              className="bg-white w-full px-4 py-3 h-60  rounded outline-none border-none "
              id="description"
              placeholder="Məs: Gündüz saat 12 radələrində Şamaxinkada araz market tərəfdə saat tapmışam.."
              onChange={(e) => changeInputs(e)}
              value={experience.description}
            />
          </div>

          <div className="mt-12 w-full items-center flex justify-center">
            <button
              onClick={(e) => sendExperience(e)}
              className="hover:bg-red-600 text-xl hover:text-white
            transition duration-300
            bg-white
            px-6 py-3 rounded"
            >
              Göndər
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Share;
