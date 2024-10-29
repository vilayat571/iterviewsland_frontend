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
      className={"bg-blue-600 px-4 py-3 text-base text-white rounded"}
      id="poppins"
    >
      PDF-in <FontAwesomeIcon icon={faDiagramProject} />
      <sup className="p-1">{savedQuestionsCart.length}</sup>
    </button>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default PDFIN;
