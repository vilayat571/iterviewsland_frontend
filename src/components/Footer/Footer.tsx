import { Link } from "react-router-dom";
import { hrefsData } from "../../constants/NavData";
import Logo from "../../atoms/Navbar/Logo";

const Footer = () => {
  return (
    <div className=" px-12 w-11/12 pt-10 pb-4  font-semibold flex flex-col h-auto text-white mt-16 bg-[#161515] ">
      <div className="grid grid-cols-3">
        <div className="col-span-1 flex flex-col">
          <Logo />

          <p className="mt-1 ml-2 tracking-wider text-base text-[#fff]">
            Müsahibələrə hazırlaş
            <br /> və daha uğurlu ol! Bütün mövzular <br /> üzrə sualları
            saytımızda tapa bilərsən.
          </p>
        </div>

        <div
          className="col-span-1 flex xl:justify-center lg:justify-center md:justify-center sm:justify-start 
        relative xl:left-12 lg:left-12 md:left-12 sm:left-0"
        >
          <div>
            <p className="text-xl font-semibold text-[#fff]">Səhifələr</p>
            <div className="mt-3 flex flex-col gap-y-1">
              {hrefsData.map((item) => {
                return (
                  <Link
                    key={item.id}
                    to={item.link}
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
        relative xl:left-12 lg:left-12 md:left-12 sm:left-0"
        >
          <div>
            <p className="text-xl font-semibold text-[#fff]">Abunə ol</p>
          </div>
        </div>
      </div>

      <div className="text-white text-sm border-t-[#5f5f5f] border-t-[1px] mt-6 pt-6">
        Copyright © 2024 Bütün hüquqlar qorunur | Bu sayt <u>Vilayət Səfərov</u>{" "}
        tərəfindən hazırlanmışdır.
      </div>
    </div>
  );
};

export default Footer;
