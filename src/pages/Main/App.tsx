import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IntroTextMain from "../../components/Main/IntroTextMain";
import Layout from "../../Layout/Layout";
import { faBlog, faPodcast } from "@fortawesome/free-solid-svg-icons";

export interface ICategory {
  categoryName: string;
}

const App = () => {
  return (
    <Layout>
      <div
        className=" items-center flex flex-col
      xl:w-4/5 lg:w-4/5 md:w-full sm:w-full
      text-white 
      "
      >
        <img
          className="xl:w-[270px] lg:w-[270px] md:w-[220px] sm:w-[200px] mt-12 object-cover"
          src="https://r2.erweima.ai/imgcompressed/compressed_57b6009281b58ecf2785fefb6ad493a3.webp"
          alt=""
        />
        <IntroTextMain />

        <hr className=" border-t-[1px] border-[#777777] w-full my-16" />

        <div className="flex        xl:px-0 lg:px-0 md:px-4 sm:px-4 flex-col w-full items-center">
          <p
            className="text-[#f1f1f1] text-3xl  
xl:text-center lg:text-center md:text-left sm:text-left
  font-semibold"
          >
            Biz sizə aşağıdakı istiqamətlər üzrə <br />
            <span className="text-orange-500">
              faydalı resurslar təqdim edirik.
            </span>
          </p>

          <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-8 w-full h-auto mt-12
   
          ">


            <div className="col-span-1 px-6 py-8 gap-2 items-start rounded-lg border-[1px] border-[#313131] flex flex-col  bg-[#06090E]">
              <FontAwesomeIcon
                icon={faBlog}
                className="text-2xl rounded-full
               bg-[#14130F] text-white p-3"
              />
              <span className="ml-2 text-lg mt-2">Bloqlar</span>
              <p className="text-[#a5a5a5] ml-2  tracking-wider leading-[28px] ">
                Bloqlar hissəsində müxtəlif mütəxəssislərin yazılarını oxuya və
                öz təcrübələrinizi də bölüşərək, başqalarına kömək edə
                bilərsiniz.
              </p>
            </div>

            <div className="col-span-1 px-6 py-8 gap-2 items-start rounded-lg border-[1px] border-[#313131] flex flex-col  bg-[#06090E]">
              <FontAwesomeIcon
                icon={faPodcast}
                className="text-2xl rounded-full
               bg-[#14130F] text-white p-3"
              />
              <span className="ml-2 text-lg mt-2">Mentorlar</span>
              <p className="text-[#a5a5a5] ml-2  tracking-wider leading-[28px] ">
                Mentorlar hissəsində seçdiyiniz bir mentordan dəstək ala
                bilərsiniz. Mentorlar iki kateqoriyaya bölünür: müsahibəyə
                hazırlıq və karyera dəstəyi üzrə.
              </p>
            </div>


          </div>



        </div>






      </div>
    </Layout>
  );
};

export default App;
