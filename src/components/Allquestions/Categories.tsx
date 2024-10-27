import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ICategory } from "../../pages/Questions/AllQuestions";

const Categories: React.FC<{
  categories: ICategory[] | null;
  sCategory:string|null,
  scrollDown: (
    category: string,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  handleShare: (
    category: string,
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => Promise<void>;
}> = ({ categories, scrollDown, handleShare,sCategory }) => {
  return (
    <div className="flex flex-col px-3 mt-0">
      <div className="w-full flex justify-between items-center">
        <span className="w-full border-b-[1px] border-[rgb(30,41,60)]"></span>
        <p className="text-base border-[1px] border-[rgb(30,41,60)] px-5 py-3 rounded text-nowrap text-slate-100">
          Bütün sahələr
        </p>
        <span className="w-full border-b-[1px] border-[rgb(30,41,60)]"></span>
      </div>

      <div
        className="text-[#000]  w-full mx-auto relative gap-3 grid 
      xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 mt-6"
      >
        {categories?.map((category: ICategory) => (
          <button
            onClick={(e) => scrollDown(category.categoryname, e)}
            key={category.categoryname} // Use category name as key (ensure it's unique)
            className={`px-4 py-4 ${
              sCategory === category.categoryname
                ? "text-white border-[#363636]"
                : "text-slate-200 border-[rgb(30,41,60)]"
            } bg-[#10172A] border-[1px] flex items-center justify-between col-span-1 rounded `}
          >
            <span id="poppins">{category.categoryname}</span>
            {/* Render not supported sharing UI */}
            <FontAwesomeIcon
              onClick={(e) => handleShare(category.categoryname, e)}
              className="text-slate-300 text-lg py-1"
              icon={faShareNodes}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
