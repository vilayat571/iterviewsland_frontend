const Introtext = () => {
  return (
    <div className="w-full flex justify-center items-start flex-row mt-16 mb-6">
      <div className="flex flex-col  w-full items-center text-center">
        <p id="poppinsbold" className=" px-1
       text-[54px] leading-[60px] 
       xl:block md:hidden sm:hidden lg:block
         text-[#eee]">
          Hər müsahibənə
          <br />
          vaxt itirmədən hazır ol!
        </p>

        <p id="poppinsbold" className=" px-1
       text-[40px] leading-[48px]
         text-[#eee]
                          xl:hidden md:block sm:block lg:hidden

         ">
          Müsahibənə
          <br />
          tamam hazır ol!
        </p>
        <p
          id="poppins"
          className="px-3 text-base text-center text-slate-300 mt-2
          
"
        >
          İşində peşakar İT mütəxəssislərinin təsdiqi ilə hazırlanmış təcrübə
          yönümlü <br className="xl:block lg:block md:hidden sm:hidden" />
          müsahibə suallar ilə sənində bilmədiyin mövzu, hazırlaşmadığın sual
          qalmasın!
        </p>
      </div>
    </div>
  );
};

export default Introtext;
