import { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import { Link } from "react-router-dom";
import { url } from "../../constants/Apiurl";

export interface ICategory {
  categoryName: string;
}

const App = () => {
  const [categories, setCategories] = useState<ICategory[] | null>(null);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const urlApp = `${url}/categories`;
    fetch(urlApp)
      .then((res) => res.json())
      .then((data) => setCategories(data.categories))
      .then(() => setLoading(false));
  });

  return (
    <Layout>
      <div
        className={`flex flex-col w-full xl:px-20 lg:px-20 md:px-8 sm:px-4 pb-12 mt-10 ${
          loading && "h-screen flex justify-center items-center"
        }`}
      >
        {loading ? (
        <div className="text-white text-center text-3xl">
          Yüklənir...
        </div>
        ) : (
          <>
            <p className="text-[#f1f1f1] 
            xl:text-center lg:text-center md:text-left sm:text-left 
            xl:text-[45px] lg:text-[45px] md:text-[35px] sm:text-3xl  font-semibold">
              Müsahibə sualları!
            </p>
            <p className="text-white 
            leading-[25px]
               xl:text-center lg:text-center md:text-left sm:text-left 
            text-base tracking-widest
            xl:mt-3 lg:mt-3 md:mt-2 sm:mt-3 ">
              <u>interviewsland.sh</u> ilə özünü inkişaf etdir və müsahibələrdə
              uğurlu ol!
              <br />
              Burada sən istədiyin mövzuya aid müsahibə suallarını tapa və
              hazırlaşa bilərsən.
            </p>
            <div className="text-white  xl:w-11/12 lg:w-11/12 md:w-full sm:w-full mx-auto relative gap-3 grid 
            xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 mt-8">
              {categories?.map((category: ICategory) => {
                return (
                  <Link
                  key={Math.random()}
                    to={`/suallar/${category.categoryName}`}
                    className="px-4 py-3 border border-[#5c5c5c] col-span-1  text-[#d1d1d1]
            rounded"
                  >
                    {category.categoryName}
                  </Link>
                );
              })}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default App;
