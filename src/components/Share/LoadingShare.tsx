import React from "react";

const LoadingShare:React.FC<{loading:boolean}> = ({loading}) => {
  return (
    <>
      {loading ? (
        <div className="w-full bg-black h-screen flex items-center justify-center fuxed top-0 left-0">
          Göndərilir
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default LoadingShare;
