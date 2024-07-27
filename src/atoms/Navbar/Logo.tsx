import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Link
        to="/"
        className=" text-2xl  text-[#fff] px-2 font-black rounded-sm py-1 "
      >
        <span className="text-[19px]  text-[#ff790bee] my-[0px]">ı</span>
        <span className="text-[21px]  text-[#ff790bee] ml-[1px]">ı</span>
        <span className="text-[24px]  text-[#ff790bee] ml-[1px]">ı</span>
        <span className="text-3xl  text-[#ff790bee] ml-[1px]">I</span>
        nterviewsland
      </Link>
    </div>
  );
};

export default Logo;
