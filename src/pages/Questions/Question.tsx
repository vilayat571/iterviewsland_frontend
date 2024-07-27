import { useParams } from "react-router-dom";
import Layout from "../../Layout/Layout";
import { useEffect, useState } from "react";
import { url } from "../../constants/Apiurl";

export interface IQuestions {
  title: string;
  category: string;
  number: number;
}

const Question = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const [questions, setQuestions] = useState<IQuestions[] | null>(null);
  const { category } = useParams();

  useEffect(() => {
    const urlApp = `${url}/questions/${category}`;
    fetch(urlApp)
      .then((res) => res.json())
      .then((data) => setQuestions(data.questions))
      .then(() => setLoading(false));
  });

  return (
    <Layout>
      <div
        className={`text-white ${
          loading && "h-screen flex justify-center items-center"
        } 
          xl:w-4/5 lg:w-4/5 md:w-full sm:w-full
        mx-auto relative  mt-6`}
      >
        {loading ? (
          <div className="text-center text-white text-3xl">Yüklənir..</div>
        ) : (
          <>
            {questions?.length ? (
              <div
                className="flex flex-col  
              xl:px-12 lg:px-12 md:px-3 sm:px-5
               mt-10"
              >
                <p
                  className="
                xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl
                text-white mb-6 
                xl:text-center lg:text-center md:text-left sm:text-left"
                >
                  {category} müsahibə sualları : {questions?.length} ədəd
                </p>
                <div className="grid grid-cols-1 gap-3 ">
                  {questions?.map((question: IQuestions) => {
                    return (
                      <p
                        key={Math.random()}
                        className="px-0 py-3 flex justify-between items-start relative bottom-2 border-b
                         border-[#5c5c5c] col-span-1  text-[#d1d1d1]
            rounded"
                      >
                        <span>
                          {question.number}. {question.title}
                        </span>
                        <button
                          onClick={() => {
                            alert(
                              "Sualların cavabları sonrakı yeniləmələr ilə əlavə ediləcək. Üzür istəyirik!"
                            );
                          }}
                          className="text-lg cursor-pointer"
                        >
                          +
                        </button>
                      </p>
                    );
                  })}
                  <div className="flex w-full  justify-center tracking-wider">
                    <button
                      className="px-4 py-3 rounded text-[#d1d1d1] mt-4 border-[1px] border-[#d1d1d1] 
              text-sm "
                    >
                      Daha çox göstər
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full text-2xl h-[400px]  flex justify-center items-center">
                Bu kateqoriya üzrə suallar hələ əlavə edilməyib!
              </div>
            )}
          </>
        )}
      </div>
    </Layout>
  );
};

export default Question;
