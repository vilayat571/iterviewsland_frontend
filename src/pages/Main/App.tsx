import IntroTextMain from "../../components/Main/IntroTextMain";
import Layout from "../../Layout/Layout";

export interface ICategory {
  categoryName: string;
}

const App = () => {
  return (
    <Layout>
      <div
        className="h-screen items-center flex flex-col
      xl:w-4/5 lg:w-4/5 md:w-full sm:w-full
      text-white text-3xl 
      "
      >
        <img
        className="xl:w-[270px] lg:w-[270px] md:w-[220px] sm:w-[200px] mt-6 object-cover"
          src="https://r2.erweima.ai/imgcompressed/compressed_57b6009281b58ecf2785fefb6ad493a3.webp"
          alt=""
        />
        <IntroTextMain />

        <div>
          <p
            className="text-[#f1f1f1] 
text-left
text-3xl  font-semibold"
          >
            Xidmətlər
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default App;
