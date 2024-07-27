import { useParams } from "react-router-dom";
import Layout from "../../Layout/Layout";
import { useEffect, useState } from "react";

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
    const url = `http://localhost:3000/api/v1/questions/${category}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setQuestions(data.questions))
      .then(() => setLoading(false));
  });

  return (
    <Layout>
      <div
        className={`text-white ${
          loading && "h-screen flex justify-center items-center"
        } w-3/4 mx-auto relative  mt-12`}
      >
        {loading ? (
          <div className="text-center text-white text-3xl">Yüklənir..</div>
        ) : (
          <>
            {questions?.length ? (
              <div className="flex flex-col  px-12 mt-10">
                <p className="text-3xl text-white mb-6 text-center">
                  {category} müsahibə sualları : {questions?.length} ədəd
                </p>
                <div className="grid grid-cols-1 gap-3 ">
                  {questions?.map((question: IQuestions) => {
                    return (
                      <p
                        className="px-4 py-3 flex justify-between items-center border-b border-[#5c5c5c] col-span-1  text-[#d1d1d1]
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
