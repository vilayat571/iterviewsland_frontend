import { faArrowLeft, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ExampleText: React.FC<{
  showPopup: boolean;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ showPopup, setShowPopup }) => {
  return (
    <>
      {showPopup && (
        <div
          id="ocean"
          className="fixed w-full h-screen right-0 top-0 bg-[#0E1527] text-white z-10 
      flex items-center justify-center px-4 py-2 rounded"
        >
          <button
                    aria-label="Open popup Button"

            onClick={() => setShowPopup(!showPopup)}
            className=" absolute xl:top-8 lg:top-8 md:top-4 sm:top-4 z-40 
            xl:right-8 lg:right-8 md:right-4 sm:right-4
           border-[rgba(30,41,60)] border-[1px] text-sm text-white hover:bg-transparent bg-blue-700
                 hover:text-white
                transition duration-300 px-6 py-3 rounded-[3px] "
          >
            <FontAwesomeIcon className="text-white" icon={faArrowLeft} />
          </button>
          <div className="h-auto border-[rgb(30,41,60)] rounded border-[1.5px] 
          xl:w-1/2 lg:w-1/2 md:w-full sm:w-full py-3 px-3 flex flex-col items-start gap-3">
            <p
              id="ocean"
            className="text-slate-200 text-left text-base border-[1px] border-[rgb(30,41,60)] py-4 px-3 w-full flex items-center justify-between  rounded">
            
             <span> Asif Ibrahimov</span> <FontAwesomeIcon icon={faUser} />
            </p>
            <p className="text-slate-200 text-left text-base border-[1px] border-[rgb(30,41,60)] py-4 px-3 rounded w-full">
              Iktex LLC şirkətində Python Backend Developer vakansiyası <br />
              üzrə müsahibədə oldum.
            </p>
            <p className="text-slate-200 text-left text-base border-[1px] border-[rgb(30,41,60)] py-4 px-3 rounded w-full">
                Müsahibə zamanı, Python-un əsas xüsusiyyətləri haqqında məlumat
                verməyim istəndi. Məsələn, "Python-da decorator-lar nədir?"
                sualı ilə qarşılaşdım və onların funksiya davranışını necə
                dəyişdirdiyini açıqladım.
                Ayrıca, API-lərin yaradılması haqqında danışdım və RESTful
                xidmətlərdən necə istifadə etdiyimi izah etdim. Həmçinin, SQL və
                NoSQL verilənlər bazaları arasındakı fərqləri müzakirə etdik.
                Müsahibə sonunda, komanda işinə və çevik inkişaf
                metodologiyalarına dair suallar verildi, bu da şirkət
                mədəniyyətini anlamağımda kömək etdi.
            </p>
              <span className="bg-blue-800 text-white px-3 rounded-sm py-3 text-sm">
                Backend Developer
              </span>
          </div>
        </div>
      )}
    </>
  );
};

export default ExampleText;
