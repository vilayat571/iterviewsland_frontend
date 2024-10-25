const Introtext = () => {
  return (
    <div className="w-full flex justify-center items-start flex-row mt-20 mb-10">
      <div className="flex flex-col  w-full items-center text-center">
        <p id="poppinsbold" className="text-[54px] leading-[65px] text-[#eee]">
          Hər müsahibənə
          <br />
          vaxt itirmədən hazır ol!
        </p>
        <p
          id="poppins"
          className="px-2 text-base text-center text-slate-300 mt-4"
        >
          İşində peşakar İT mütəxəssislərinin təsdiqi ilə hazırlanmış təcrübə
          yönümlü <br />
          müsahibə suallar ilə sənində bilmədiyin mövzu, hazırlaşmadığın sual
          qalmasın!
        </p>
      </div>
    </div>
  );
};

export default Introtext;
