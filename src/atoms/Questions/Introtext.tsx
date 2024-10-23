const Introtext = () => {
  return (
    <div className="w-full flex justify-center items-start flex-row mt-6 mb-0">
      <div className="flex flex-col py-12 w-full items-center text-center">
        <p id="ocean" className="text-[54px] leading-[60px] text-[#eee]">
          Hazırlaşmağa bu gündən
          <br />
          etibarən,  vaxt itirmədən başla!
        </p>
        <p id="ocean" className="px-2 text-base text-slate-400 mt-2 ">
          Profesional IT mütəxəssislərinin təsdiqi ilə hazırlanmış təcrübə yönümlü <br />
        müsahibə suallar ilə sənində bilmədiyin mövzu, hazırlaşmadığın sual qalmasın!
        </p>
      {/*   <form className="px-2 mt-6 w-full  flex justify-center items-center">
          <input
            placeholder="Təklif və ya sual.."
            type="text"
            id="outfit"
            className="px-6 w-1/3 border-[1px] py-2 placeholder:text-black  rounded-l h-[70px] bg-white "
          />
          <button className="bg-[#4079DA] px-8 w-44 text-white rounded-r py-3 h-[70px]">
            Göndər
          </button>
        </form> */}
      </div>
    </div>
  );
};

export default Introtext;
