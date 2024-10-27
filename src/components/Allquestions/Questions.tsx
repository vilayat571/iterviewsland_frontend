import { faDiagramProject } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useAppDispatch } from '../../redux/reducers/store';
import { addQuestionToCart } from '../../redux/reducers/addToCart';
import { IQuestion } from '../../redux/reducers/getQuestions';

const Questions:React.FC<{questions:IQuestion[] | null, setSuggest: React.Dispatch<React.SetStateAction<boolean>>, generatePDF:() => Promise<void>}> = ({questions, setSuggest, generatePDF}) => {

    const dispatch=useAppDispatch()

  return (
    <div className="w-full xl:px-3 lg:px-3 md:px-2 sm:px-3 flex justify-center items-center rounded-md mt-0">
    <div
      className="text-slate-400 bg-[#10172A] mt-6 border-[rgb(30,41,60)] w-full border-[1px] xl:px-8  lg:px-8 md:px-0 sm:px-2 
    rounded mx-auto relative"
    >
      <>
        {questions?.length ? (
          <div className="flex flex-col px-2 py-8">
            <div className="grid grid-cols-1 gap-3 ">
              {questions.map((question, index) => (
                <p
                  onClick={() => {
                    dispatch(
                      addQuestionToCart({ category: question.title })
                    );
                  }}
                  key={index} // Use index as key if there's no unique id
                  className="px-0 py-3 flex border-[1px] border-r-0 border-l-0 border-t-0 border-b-[rgb(30,41,60)]
                   justify-between items-start relative bottom-2 col-span-1 cursor-pointer text-slate-400 rounded"
                >
                  <span id="poppins" className="text-slate-200">
                    {index + 1}. {question.title}
                  </span>

                  <FontAwesomeIcon
                    className="text-white cursor-pointer"
                    icon={faDiagramProject}
                  />
                </p>
              ))}
            </div>
            <div id="cavablar" className="flex items-center gap-4">
              <button
                id="poppins"
                className="mt-6 bg-[#E7EFFE] inline w-44 rounded px-4 py-3 text-[#000]"
                onClick={() => generatePDF()}
              >
                PDF kimi yüklə
              </button>
              <button
                id="poppins"
                className="mt-6 bg-[#E7EFFE] inline w-44 rounded px-4 py-3 text-[#000]"
                onClick={() => window.scrollTo(0, 0)}
              >
                Kateqoriyalar
              </button>
              <button
                id="poppins"
                className="mt-6 bg-[#E7EFFE] inline  rounded px-4 py-3 text-[#000]"
                onClick={() => {
                  window.scrollTo(0, 0), setSuggest(true);
                }}
              >
                Sual tövsiyyə et
              </button>
            </div>
          </div>
        ) : (
          <div
            id="poppins"
            className="w-full text-2xl h-[400px] flex justify-center items-center"
          >
            Bu kateqoriya üzrə suallar hələ əlavə edilməyib!
          </div>
        )}
      </>
    </div>
  </div>
  )
}

export default Questions
