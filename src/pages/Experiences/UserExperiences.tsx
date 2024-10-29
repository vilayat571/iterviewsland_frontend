import { useEffect, useState } from "react";
import { fetchExperiences } from "../../redux/reducers/getExperiences";
import { useAppDispatch, useAppSelector } from "../../redux/reducers/store";
import Layout from "../../Layout/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faExpand,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import Loading from "../../Layout/Loading";
import Popup from "../../components/Main/Popup";
import { IExperience } from "../Questions/Share";
import SEO from "../../constants/SEO";

const UserExperiences = () => {
  const { loading, experiences } = useAppSelector(
    (state) => state.getExperiences
  );

  const dispatch = useAppDispatch();

  const [limit, setLimit] = useState(6);
  const [categoryExperience, setCategoryExperience] = useState("Kateqoriyalar");
  const [data, setData] = useState<IExperience | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  console.log(data);
  useEffect(() => {
    dispatch(fetchExperiences({ limit, category: categoryExperience }));
  }, [dispatch, limit, categoryExperience]);

  const categories = [
    "Kateqoriyalar",
    "Backend Developer",
    "SQL Developer",
    "Data Science",
    "SOC Analyst",
  ];

  const handleOpenModal = (experience: any) => {
    setData(experience);
    setIsModalVisible(true); // Trigger the modal to be visible
  };

  return (
    <>
      {/* Modal / Popup */}
      <SEO
        title="ITHUB - Proqram Müsahibələri Təcrübələri"
        description="ITHUB-da inkişaf etdiricilərin proqram müsahibələrində yaşadığı təcrübələri, müvəffəqiyyət hekayələrini və tövsiyələri oxuyun. Proqramlaşdırma müsahibələrində uğur qazanmaq üçün lazım olan ipuclarını kəşf edin."
        name="ITHUB"
        type="website"
        keywords="ITHUB, müsahibə təcrübələri, proqram müsahibəsi, inkişaf etdirici təcrübələri, müvəffəqiyyət hekayələri, proqramlaşdırma müsahibə tövsiyələri, Azərbaycan"
      />

      <Popup play={isModalVisible} setPlay={setIsModalVisible}>
        <div className="w-full bg-[#0F1629] h-screen flex items-center justify-center fixed text-white xl:p-12 lg:p-12 md:p-4 sm:p-4 overflow-y-hidden">
          <button
            aria-label="Open a bar Button"
            onClick={() => {
              setIsModalVisible(false), setData(null);
            }}
            className=" absolute top-8 z-50 right-8 border-[rgba(30,41,60)] border-[1px] text-sm text-white hover:bg-transparent bg-blue-700
                 hover:text-white
                transition duration-300 px-6 py-3 rounded-[3px] "
          >
            <FontAwesomeIcon className="text-white" icon={faArrowLeft} />
          </button>
          <div className="h-auto border-[rgb(30,41,60)] rounded border-[1.5px] xl:w-1/2 lg:w-1/2 md:w-full sm:w-full  py-6 
          xl:px-6  lg:px-6  md:px-4  sm:px-4  flex flex-col items-start gap-3">
            <p
              id="ocean"
              className="text-slate-200 text-left text-base border-[1px] border-[rgb(30,41,60)] py-4 px-3 rounded inline"
            >
              {data?.fullName}
            </p>
            <p className="text-slate-200 text-left text-base border-[1px] border-[rgb(30,41,60)] py-4 px-3 rounded w-full">
              {data?.title}
            </p>
            <p className="text-slate-100 text-left text-base border-[1px] border-[rgb(30,41,60)] py-4 px-3 rounded w-full">
              {data?.description}
            </p>

            <span className="bg-blue-800 text-white px-3 rounded-sm py-3 text-sm">
              {data?.category}
            </span>
          </div>
        </div>
      </Popup>

      {loading ? (
        <Loading />
      ) : (
        <Layout>
          <div className="w-full mt-24 mb-6 flex items-center justify-center">
            <select
              required
              className="text-white bg-transparent px-3 pr-3 border-[rgb(30,41,60)] border-[1.5px] h-16 xl:w-2/5 lg:w-2/5 md:w-4/5 sm:w-4/5 rounded outline-none"
              id="category"
              onChange={(e) => setCategoryExperience(e.target.value)}
              value={categoryExperience}
            >
              {categories != null &&
                categories.map((item: string) => {
                  return (
                    <option
                      key={Math.random()}
                      className="text-white text-base"
                      value={item}
                    >
                      {item}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 px-3 gap-6 gap-y-6 mt-10 w-full">
            {experiences?.map((experience: any) => {
              return (
                <div
                  key={experience._id}
                  className="col-span-1 border-[rgb(30,41,60)] rounded border-[1.5px] w-full px-5 pb-4 pt-2 flex flex-col items-start gap-3"
                >
                  <p
                    id="ocean"
                    className="text-white text-lg w-full flex items-center justify-between"
                  >
                    <span className="py-3">{experience.fullName}</span>
                    <FontAwesomeIcon
                      className="px-4 py-3 rounded border-[1px] border-[rgb(30,41,60)]"
                      icon={faShare}
                    />
                  </p>
                  <p className="line-clamp-4 text-slate-300 text-left text-base">
                    {experience.description}
                  </p>
                  <div className="mt-3 w-full flex items-center justify-between">
                    <span className="bg-blue-800 text-white px-3 rounded-sm py-3 text-sm">
                      {experience.category}
                    </span>
                    <button
                      aria-label="open a modal Button"
                      onClick={() => handleOpenModal(experience)}
                      className="gap-4 flex items-center border-[1px] border-[rgb(30,41,60)] text-white px-3 py-3 rounded-sm text-base"
                    >
                      <span>bax</span> <FontAwesomeIcon icon={faExpand} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-5 justify-center mt-8">
            <button
              aria-label="Increase Button"
              className="text-white px-6 py-4 rounded border-[rgba(30,41,60)] border-[1.5px]"
              onClick={() => setLimit(limit + 6)}
            >
              Daha çox (+6)
            </button>
            {categoryExperience !== "Kateqoriyalar" && (
              <button
                aria-label="Reset Button"
                className="text-white px-6 py-4 rounded border-[rgba(30,41,60)] border-[1.5px]"
                onClick={() => setCategoryExperience("Kateqoriyalar")}
              >
                Sıfırla
              </button>
            )}
          </div>
        </Layout>
      )}
    </>
  );
};

export default UserExperiences;
