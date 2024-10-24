import { useEffect, useState } from "react";
import { fetchExperiences } from "../../redux/reducers/getExperiences";
import { useAppDispatch, useAppSelector } from "../../redux/reducers/store";
import Layout from "../../Layout/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand, faFilter, faShare } from "@fortawesome/free-solid-svg-icons";
import Loading from "../../Layout/Loading";
import Popup from "../../components/Main/Popup";

const UserExperiences = () => {
  const { loading, experiences } = useAppSelector(
    (state) => state.getExperiences
  );

  const dispatch = useAppDispatch();

  const [limit, setLimit] = useState(6);
  const [categoryExperience, setCategoryExperience] = useState("Kateqoriyalar");
  const [data, setData] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

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

      <Popup play={isModalVisible} setPlay={setIsModalVisible}>
        <div className="text-5xl text-white">salam men tam metn</div>
      </Popup>

      {loading ? (
        <Loading />
      ) : (
        <Layout>
          <div className="w-full mt-24 mb-6 flex items-center justify-center">
            <select
              required
              className="text-white bg-transparent px-3 pr-3 border-[rgb(30,41,60)] border-[1.5px] h-16 w-2/5 rounded outline-none"
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
          <div className="grid grid-cols-3 gap-6 gap-y-6 mt-10 w-full">
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
              className="text-white px-6 py-4 rounded border-[rgba(30,41,60)] border-[1.5px]"
              onClick={() => setLimit(limit + 6)}
            >
              Daha çox (+6)
            </button>
            {categoryExperience !== "Kateqoriyalar" && (
              <button
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
