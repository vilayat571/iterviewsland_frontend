import React from "react";

const LoadingShare:React.FC<{loading:boolean}> = ({loading}) => {
  return (
    <>
      {loading ? (
        <div className="w-full bg-[#0e1527] text-white z-50 text-2xl gap-5 flex-col fixed h-screen text-center flex items-center justify-center  top-0 left-0">
          <p className="text-6xl">🚀</p>
          <p>Göndərilir..</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default LoadingShare;
