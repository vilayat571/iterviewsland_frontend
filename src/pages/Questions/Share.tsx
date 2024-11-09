import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import "react-quill/dist/quill.snow.css";
import { useAppSelector } from "../../redux/reducers/store";
import ExampleText from "../../components/Share/ExampleText";
import LoadingShare from "../../components/Share/LoadingShare";
import ExampleTextBtn from "../../components/Share/ExampleTextBtn";
import CodeexistShowExperience from "../../components/Share/CodeexistShowExperience";
import MainpieceofShareCom from "../../components/Share/MainpieceofShareCom";
import SEO from "../../constants/SEO";

export interface IExperience {
  _id?:string,
  category: string;
  title: string;
  description?: string;
  fullName?: string;
  status: boolean;
}

const Share = () => {
  const [code, setCode] = useState("");

  const loading = useAppSelector((state) => state.postExperience?.loading);

  const closePopup = () => {
    const survey1 = confirm(
      "Bağlamdan öncə! \nZəhmət olmasa, kodunu götürməyi unutma, çünki daha sonra təcrübə mətnini kod vasitəsi ilə tapacaqsan."
    );

    if (survey1) {
      const survey = "Bağlamaq istəyirsiniz?";

      if (survey) {
        setCode("");
      }
    }
  };

  const [showPopup, setShowPopup] = useState<boolean>(false);

  return (
    <div
      id="poppins"
      className="] w-full absolute top-0 left-0 h-screen xl:pt-36 lg:pt-36 md:pt-28 sm:pt-28 flex flex-col items-center"
    >
      <SEO
        title="ITHUB - İnkişaf etdiricilər və IT Peşəkarları Müsahibə Təcrübələrini Paylaşır"
        description="ITHUB-da inkişaf etdiricilər və digər IT mütəxəssisləri real müsahibə təcrübələrini paylaşır. Müsahibələrdə nələr baş verdiyini öyrənin və uğur qazanmağınıza kömək edəcək dəyərli məlumatlar əldə edin."
        name="ITHUB"
        type="website"
        keywords="ITHUB, müsahibə təcrübələri, inkişaf etdirici təcrübələri, IT müsahibələri, proqramlaşdırma, uğur hekayələri, Azərbaycan"
      />

      <ExampleText showPopup={showPopup} setShowPopup={setShowPopup} />

      <LoadingShare loading={loading} />

      <ExampleTextBtn
        length={code.length}
        showPopup={showPopup}
        setShowPopup={setShowPopup}
      />

      <CodeexistShowExperience code={code} closePopup={closePopup} />

      <MainpieceofShareCom setCode={setCode} />
    </div>
  );
};

export default Share;
