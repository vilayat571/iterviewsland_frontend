import Layout from "../../Layout/Layout";

export interface ICategory {
  categoryName: string;
}

const App = () => {
  return (
    <Layout>
      <div className="h-screen w-full text-white text-3xl">App</div>
    </Layout>
  );
};

export default App;
