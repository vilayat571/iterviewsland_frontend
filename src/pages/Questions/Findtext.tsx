import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../assets/styles/Find.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft, faTimes } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Loading from "../../Layout/Loading";

const Findexperience = () => {
  const navigate = useNavigate();

  const [query, setQuery] = useState<string>("");

  const [experience, setExperience] = useState<{
    category: string;
    description: string;
    status: boolean;
    title: string;
    fullName: string;
  } | null>(null);

  const [show, setShow] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.FormEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    if (query.length === 5) {
      setLoading(true);
      setShow(true);

      const uri = `https://interviewsland-backend.onrender.com/api/v1/experiences/find`;

      fetch(uri, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code: query,
        }),
      })
        .then((response) => response.json())
        .then((data) => setExperience(data.experience))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    } else {
      alert("Kod 5 rəqəmli olamlıdır. Zəhmət olmasa doğru kodu daxil edin! ");
    }
  };

  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <p
        onClick={() => navigate("/")}
        className="text-slate-100 px-5 text-lg cursor-pointer py-3 rounded absolute right-4 top-4 border-[1px] border-slate-300"
      >
        <FontAwesomeIcon icon={faArrowCircleLeft} />
      </p>
      <div
        className="w-full h-screen
    flex items-center justify-center flex-col"
      >
        <div className="xl:w-1/3  lg:w-1/3 md:w-1/3  sm:w-11/12   h-[340px] flex flex-col items-center">
          <p className=" text-4xl mb-1 text-slate-100 text-center font-semibold">
            Kod daxil edin:
          </p>

          <form
            onSubmit={(e) => handleSubmit(e)}
            action=""
            className="w-full mt-5 mb-1 flex items-center"
          >
            <input
              type="tel"
              id="poppins"
              required
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Məs: 43456"
              className="px-6 w-full indent-2 py-6 outline-none  placeholder:text-black bg-white rounded"
            />
          </form>
          <div className="flex items-start justify-start  text-lg  mt-5 gap-4">
            <button
              id="poppins"
              onClick={(e) => handleSubmit(e)}
              className="bg-blue-800 hover:bg-white hover:text-black transition duration-300  text-white px-8 py-4 rounded text-center"
            >
              Axtar
            </button>
          </div>

          <motion.div className={show ? styles.open : styles.close}>
            <button
              onClick={() => setShow(false)}
              className="absolute bg-white hover:bg-red-500 text-lg hover:text-white text-black
              transition duration-300 m-4 top-0 right-0 rounded px-4 py-2 cursor-pointer"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            {loading ? (
              <Loading />
            ) : experience != null && experience != undefined ? (
              <div className="w-1/2 border-[1px] flex flex-col gap-4 border-[#c8c8c8] rounded px-4 py-12 h-[50vh] ">
                <p className="w-full">{experience.fullName}</p>
                <p className="w-full border-[1px] border-[#c8c8c8] px-3 py-4 rounded">
                  {experience.title}
                </p>
                <p className="w-full border-[1px] border-[#c8c8c8] px-3 py-4 rounded">
                  {experience.description}
                </p>
                <p className="w-full border-[1px] border-[#c8c8c8] px-3 py-4 rounded">
                  {experience.category}
                </p>
                <p className="w-full border-[1px] border-[#c8c8c8] px-3 py-4 rounded">
                  {experience.status ? "Paylaşılıb" : "Paylaşılmayib"}
                </p>
              </div>
            ) : (
              <div className="flex text-center itemscenter flex-col">
                <p className="xl:text-2xl lg:text-2xl md:text-xl sm:text-lg">
                  <span className="text-red-600">
                    Təəssuf ki, axtarışa uyğun elan tapılmadı.
                  </span>
                  <br />
                  Əgər elanınızın mövcud olduğundan əminsinizsə <br /> bu zaman
                  kodu səhf yazmış ola bilərsiniz.
                </p>

                <div className="w-full flex justify-center mt-4">
                  <button
                    onClick={() => setShow(false)}
                    className="  
                  px-4 text-base py-3              
                  transition duration-200 bg-red-500   text-white hover:bg-white  hover:text-black  rounded  text-center"
                  >
                    Yenidən sına
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Findexperience;
