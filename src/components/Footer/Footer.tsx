import { Link } from "react-router-dom";
import { hrefsData } from "../../constants/NavData";
import Logo from "../../atoms/Navbar/Logo";

const Footer = () => {




  return (
    <div className="xl:w-1/2 lg:w-11/12 md:w-full sm:w-full
     mt-12 flex justify-center items-center">
      <div
        className=" 
   xl:px-12  lg:px-12  md:px-4 sm:px-2 
   xl:w-11/12 lg:w-11/12 md:w-full sm:w-full
    pt-10 pb-4  font-semibold flex flex-col h-auto text-white mt-0"
      >
        <div
          className="grid gap-y-16
      xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1"
        >
          <div className="col-span-1 flex flex-col">
            <Logo />

            <p className="mt-1 ml-2 tracking-widest leading-[25px] text-sm text-[#fff]">
              Bloqlar, dokumentasiyalar və müsahibə <br />
              ilə bağlı hər şey! Saytımız sizə azərbaycan
              <br />
              dilində faydalı resurslar təqdim edir.
            </p>
          </div>

          <div
            className="col-span-1 flex xl:justify-center lg:justify-center md:justify-center sm:justify-start 
        relative xl:left-12 lg:left-12 md:left-12 sm:left-2"
          >
            <div>
              <p className="text-xl font-semibold text-[#fff]">Səhifələr</p>
              <div className="mt-3 flex flex-col gap-y-1">
                {hrefsData.map((item) => {
                  return (
                    <Link
                      key={item.id}
                      onClick={() =>
                        !item.isActive &&
                        alert("Bu hissə tam hazır deyil. Üzür istəyirik!")
                      }
                      to={item.isActive ? item.link : ""}
                      className="text-white text-base "
                    >
                      {item.text}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <div
            className="col-span-1 flex xl:justify-center lg:justify-center md:justify-center sm:justify-start 
        relative xl:left-12 lg:left-6 md:left-12 sm:left-2"
          >
            <div className="w-4/5">
              <p className="text-xl font-semibold text-[#fff]">Abunə ol</p>
              <p className="text-sm font-semibold text-[#fff] my-2">
                Saytımızda müəyyən özəlliklər əlavə ediləcəkdir. Bunları
                vaxtında dəyərləndirə bilmək üçün abunə ol:)
              </p>
              <input
                type="email"
                required={true}
                placeholder="E-poçt.."
                className=" text-sm
            indent-2 px-5 py-2 rounded
            h-[60px] w-full bg-transparent my-2 mt-4
            border-[1px] border-[#313131]"
              />
              <button className="bg-orange-500 tracking-widest text-sm px-5 mt-1 mb-3  py-3 rounded-sm">
                Göndər
              </button>
            </div>
          </div>
        </div>

        <div className="text-white text-sm border-t-[#313131] leading-[25px] border-t-[1px] mt-6 pt-6 pb-1 tracking-widest">
          Copyright © 2024 Bütün hüquqlar qorunur | Bu sayt{" "}
          <u>Vilayət Səfərov</u> tərəfindən hazırlanmışdır.
        </div>
      </div>
    </div>
  );
};

export default Footer;
