import React from "react";

const DivshowLoading:React.FC<{divShow:boolean}> = ({divShow}) => {
  return (
    <>
      {divShow ? (
        <div className="w-full h-screen fixed z-50 flex items-center justify-center top-0 left-0 bg-[#0e1527] text-white ">
          <div className="text-xl flex flex-col text-center ">
            <span className="text-6xl mb-2 ">✎ᝰ.</span>
            <span className="">pdf-in hazırlanır..</span>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default DivshowLoading;
