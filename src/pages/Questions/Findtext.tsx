import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "../../assets/styles/Find.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faTimes } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Loading from "../../Layout/Loading";
import OTPInput from "react-otp-input";
import SEO from "../../constants/SEO";

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

      const uri = `https://interviews-land.info/api/v1/experiences/find`;

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
      alert("Kod 5 rəqəmli olamlıdır. Zəhmət olmasa doğru kodu daxil edin!");
    }
  };

  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <SEO
        title="Interviewsland - Müsahibə Təcrübənizi Tapın"
        description="ITHUB-da öz kodunuzu daxil edərək paylaşdığınız müsahibə təcrübənizi tapın. Müsahibə ilə bağlı yazdıqlarınıza asanlıqla erişin."
        name="Interviewsland"
        type="website"
        keywords="Interviewsland, kod daxil et, müsahibə təcrübələri, proqramlaşdırma, IT müsahibələri, təcrübə tapma, Azərbaycan"
      />

      <p
        onClick={() => navigate("/")}
        className="text-slate-300 hover:bg-red-600 hover:border-red-600 hover:text-white transition duration-300 
        px-4 text-lg cursor-pointer py-2 rounded absolute right-4 top-4 border-[1px] border-[rgb(30,41,60)]"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </p>
      <div className="w-full h-screen grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
        <div className="col-span-1 xl:flex lg:flex md:hidden sm:hidden items-center justify-center">
          <img
            className="w-1/2"
            src="https://cdn0.iconfinder.com/data/icons/3d-front-premium/512/lock-front-premium.png"
            alt="the lock image of ITHUB website"
          />
        </div>
        <div className="col-span-1 w-full h-screen flex items-center xl:px-0 lg:px-0 md:px-2 sm:px-2 justify-center">
          <div className="relative top-12 w-full flex flex-col items-center justify-center">
            <p className="text-5xl  text-slate-100 text-center font-semibold">
              Salam 👋
            </p>
            <form
              onSubmit={(e) => handleSubmit(e)}
              className="w-full xl:mt-8 lg:mt-8 md:mt-5 sm:mt-5  mb-1 flex flex-col items-center justify-center"
            >
              <OTPInput
                value={query}
                onChange={setQuery}
                numInputs={5}
                placeholder="X"
                inputStyle={{
                  width: "80px",
                  height: "70px",
                  borderRadius: "6px",
                  margin: "3px",
                  color: "black",
                  fontSize: "24px",
                  // Use media query to adjust width and height on small screens
                  ...(window.innerWidth <= 768 && {
                    width: "50px",
                    height: "50px",
                  }),
                }}
                renderSeparator={<span>-</span>}
                renderInput={(props) => <input {...props} />}
              />
              <p className="text-blue-300 text-base xl:px-0 md:px-0 lg:px-0 sm:px-4 text-left mt-3 ">
                Diqqət: kodun doğruluğundan əmin olun
              </p>
            </form>

            <div className="flex items-start justify-start text-lg mt-5 gap-3">
              <button
                aria-label="Search Button"
                id="poppins"
                onClick={(e) => handleSubmit(e)}
                className="text-white hover:bg-blue-900 border-[1px] border-[rgb(30,41,60)] transition duration-300 px-8 py-4 rounded text-center"
              >
                Axtar ✨
              </button>
              <button
                aria-label="Write Button"
                id="poppins"
                onClick={() => navigate("/tecrubepaylash")}
                className="text-white hover:bg-blue-900 border-[1px] border-[rgb(30,41,60)] transition duration-300 px-8 py-4 rounded text-center"
              >
                Yaz ✎
              </button>
            </div>
          </div>

          <motion.div className={show ? styles.open : styles.close}>
            <button
              aria-label="Open a showbar Button"
              onClick={() => setShow(false)}
              className="absolute bg-white hover:bg-red-500 text-lg hover:text-white text-black
              transition duration-300 m-4 top-0 right-0 rounded px-4 py-2 cursor-pointer"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            {loading ? (
              <Loading />
            ) : experience != null && experience != undefined ? (
              <div className="w-full absolute top-0 left-0 h-screen bg-[#0E1527] text-slate-100 flex items-center justify-center">
                <FontAwesomeIcon
                  onClick={() => navigate("/")}
                  className="px-4 py-3 text-lg absolute top-6 right-6 rounded cursor-pointer border-[1px] border-[rgb(30,41,60)] text-white m-1"
                  icon={faArrowLeft}
                />
                <div
                  className="xl:w-1/2 lg:w-1/2 mt-6 md:w-full sm:w-full border-[1px] flex flex-col gap-4 border-[rgba(30,41,60)] rounded 
xl:px-6 lg:px-6 md:px-4 sm:px-2 mx-12 xl:py-6 lg:py-6 md:py-3 sm:py-3  h-auto"
                >
                    <p id="poppinsbold" className="rounded">
                     Ad: {experience.fullName}
                    </p>
                 
                    <p id="poppinsbold" className="rounded">
                     Cari vəziyyət:  {experience.status ? "Paylaşılıb" : "Paylaşılmayib"}
                    </p>
                  <div className="flex items-center text-nowrap overflow-scroll justify-start gap-2">
                    <span className="text-blue-300 ">Vakansiya:</span>
                    <p>{experience.title}</p>
                  </div>

                  <div className="flex items-start flex-col justify-start gap-2">
                    <span className="text-blue-300">Haqqında:</span>
                    <p
                      className="overflow-scroll"
                      dangerouslySetInnerHTML={{
                        __html: experience.description,
                      }}
                    />
                  </div>

                
                
                    <p className="w-full flex ">
                    <span className="bg-blue-600 px-4 py-3 rounded">{experience.category}</span>
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex text-center items-center justify-center bg-[#0e1527] w-full h-screen absolute top-0 left-0">
                <FontAwesomeIcon
                  onClick={() => setShow(false)}
                  className="px-4 py-3 text-lg absolute top-6 right-6 rounded cursor-pointer border-[1px] border-[rgb(30,41,60)] text-white m-1"
                  icon={faArrowLeft}
                />
                <div className="relative top-6">
                  <p className="flex flex-col">
                    <span className="text-slate-100 text-3xl">
                      Təssüf ki, tapılmadı
                    </span>
                    <span className="mt-4 w-full text-lg text-white">
                      Mətninin mövcud olduğundan{" "}
                      <br className="xl:block lg:block sm:hidden md:hidden" />{" "}
                      əminsinizsə, kodu səhf yazmış ola bilərsiniz.
                    </span>
                  </p>

                  <div className="w-full x flex justify-center mt-4">
                    <button
                      onClick={() => setShow(false)}
                      className="xl:px-6 lg:px-6 md:px-5 sm:px-5 py-4 rounded border-[1px] border-[rgb(30,41,60)] text-white m-1"
                    >
                      Axtar ✨
                    </button>
                    <NavLink
                      to={"/tecrubepaylash"}
                      onClick={() => setShow(false)}
                      className="xl:px-6 lg:px-6 md:px-5 sm:px-5 py-4 rounded border-[1px] border-[rgb(30,41,60)] text-white m-1"
                    >
                      Təcrübəni yaz ✎
                    </NavLink>
                  </div>
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
