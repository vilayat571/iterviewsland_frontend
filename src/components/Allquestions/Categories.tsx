import React, { useEffect } from "react";
import { ICategory } from "../../pages/Questions/AllQuestions";
import { useAppDispatch } from "../../redux/reducers/store";
import { fetchAuthors } from "../../redux/reducers/getAuthors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Categories: React.FC<{
  categories: ICategory[] | null;
  sCategory: string | null;
  scrollDown: (
    category: string,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}> = ({ categories, scrollDown, sCategory }) => {
  const dispatch = useAppDispatch();

  const handleSetAuthor = (category: string) => {
    localStorage.setItem("category", JSON.stringify(category));
  };

  const storedCategory = localStorage.getItem("category");
  const category: string = storedCategory ? JSON.parse(storedCategory) : "";

  useEffect(() => {
    dispatch(fetchAuthors({ category }));
  }, [category, dispatch]);

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
      xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-6"
      >
        {categories?.map((category: ICategory) => (
          <button
            aria-label="Share Button"
            onClick={(e) => {
              scrollDown(category.categoryname, e);
              handleSetAuthor(category.categoryname);
            }}
            key={category.categoryname} // Use category name as key (ensure it's unique)
            className={`px-4 py-4 ${
              sCategory === category.categoryname
                ? "text-white border-[#363636]"
                : "text-slate-200 border-[rgb(30,41,60)]"
            } bg-[#10172A] border-[1px] flex items-center justify-between col-span-1 rounded `}
          >
            <span id="poppins">{category.categoryname}</span>
            <FontAwesomeIcon icon={faArrowDown} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
