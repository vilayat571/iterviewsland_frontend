import { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import { Link } from "react-router-dom";

export interface ICategory {
  categoryName: string;
}

const App = () => {
  const [categories, setCategories] = useState<ICategory[] | null>(null);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const url = "http://localhost:3000/api/v1/categories";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCategories(data.categories))
      .then(() => setLoading(false));
  });

  return (
    <Layout>
      <div
        className={`flex flex-col w-full px-20 pb-12 mt-10 ${
          loading && "h-screen flex justify-center items-center"
        }`}
      >
        {loading ? (
        <div className="text-white text-center text-3xl">
          Yüklənir...
        </div>
        ) : (
          <>
            <p className="text-[#f1f1f1] text-center text-[45px] mb-0 font-semibold">
              Müsahibə sualları!
            </p>
            <p className="text-white text-center text-base tracking-wider ">
              <u>interviewsland.sh</u> ilə özünü inkişaf etdir və müsahibələrdə
              uğurlu ol!
              <br />
              Burada sən istədiyin mövzuya aid müsahibə suallarını tapa və
              hazırlaşa bilərsən.
            </p>
            <div className="text-white  w-3/4 mx-auto relative gap-3 grid grid-cols-4 mt-8">
              {categories?.map((category: ICategory) => {
                return (
                  <Link
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
