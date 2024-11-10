import { useNavigate } from "react-router-dom";
import SEO from "../../constants/SEO";

const Found = () => {
  const navigate = useNavigate();

  return (
  <>
   <SEO
    title="Interviewsland - Səhifə Tapılmadı"
    description="Axtardığınız səhifə tapılmadı. İthub-a xoş gəlmisiniz! Proqramlaşdırma müsahibə sualları və təcrübələri ilə tanış olun."
    name="Interviewsland"
    type="website"
    keywords="Interviewsland, səhifə tapılmadı, proqramlaşdırma, müsahibə sualları, proqram inkişafı, Azərbaycan"
  />


    <div className="flex items-center justify-center w-full h-screen">
      <div>
        <p id="poppinsbold2" className="text-[260px]  text-white">
          404
        </p>
        <div className="relative bottom-12 text-center">
          <p className="text-slate-200 text-center text-lg">
            Üzür istəyirik (ó﹏ò｡)
            <br />
            axtarışa uyğun nəticə tapılmadı..
          </p>
          <button
                    aria-label="Go back Button"

            onClick={() => navigate(-1)}
            className="text-slate-100 border-[1px] hover:bg-blue-600 transition duration-200 border-[rgb(30,41,60)] px-5 py-3 mt-4 rounded"
          >
            Geri dön
          </button>
        </div>
      </div>
    </div>
  </>
  );
};

export default Found;
