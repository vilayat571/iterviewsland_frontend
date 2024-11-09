import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <p className="text-center flex items-center justify-center text-white">
        <Link to='/'  id="poppinsbold2" className="text-white text-3xl ">
          it.land
        </Link>
        <p>
          
          <span className="ml-[6px] mr-[3px]"> by </span>
          <Link to='https://safarovacademy.com/'
          target="blank"
          className="bg-blue-600 px-1 py-1 rounded text-white">
            vilayat
          </Link>
        </p>
      </p>
  );
};

export default Logo;
