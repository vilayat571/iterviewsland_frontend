import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PDFIN: React.FC<{
  savedQuestionsCart: [];
  showCategories: boolean;
  setShowCategories: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ savedQuestionsCart, showCategories, setShowCategories }) => {
  return (
    <button
      aria-label="Counts in the PDF Button"
      onClick={() => setShowCategories(!showCategories)}
      className={"bg-blue-600 px-4 py-4 border-[rgb(33,46,71)] border-[1px] inline-block text-base text-white rounded transition duration-150 hover:bg-transparent"}
      id="poppins"
    >
      PDF <FontAwesomeIcon icon={faDiagramProject} />
      <sup className="p-1">{savedQuestionsCart.length}</sup>
    </button>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default PDFIN;
