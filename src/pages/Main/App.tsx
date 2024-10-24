import Introtext from "../../atoms/Questions/Introtext";
import Layout from "../../Layout/Layout";

export interface ICategory {
  categoryname: string;
}

const App = () => {
  return (
    <Layout>
      <div
        className="items-center flex flex-col
 xl:w-4/5 lg:w-11/12 md:w-full sm:w-full
      text-white"
      >
        <Introtext />
      </div>
    </Layout>
  );
};

export default App;
