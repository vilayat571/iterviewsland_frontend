const Introtext = () => {
  return (
    <div className="w-full flex justify-between items-start flex-row mt-16">
      <div className="flex flex-col py-12">
        <p 
 
        className="text-6xl leading-[70px] text-[#2E3446]">
         Bu gündən
          <br />
        öyrənməyə başla!
        </p>
        <p id="poppins" className="px-2 text-base text-[#7e7a7a] mt-2 ">
          Ekspertlər tərəfindən hazırlanmış <span id="poppins" className="text-black">təcrübə yönümlü suallarla</span> 
          <br /> müsahibədən uğurla keç!
        </p>
        <form className="px-2 mt-6 w-full flex items-center">
          <input 
          placeholder="E-poçt adresi.."
          type="text"
          id="poppins"
          className="px-12 w-4/5 rounded-l h-16 bg-white " />
          <button className="bg-[#4079DA] px-6 text-white rounded-r py-5 h-16">
            Göndər
          </button>
        </form>
      </div>

      <div>
        <img 
        className="relative left-40 w-[88%] object-cover
        "
        src="https://cdn.codechef.com/images/home/coding_boy.svg" alt="" />
      </div>
    </div>
  );
};

export default Introtext;
