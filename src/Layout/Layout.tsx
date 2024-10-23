import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { logPageView } from "../constants/Pageview";
import { useAppSelector } from "../redux/reducers/store";

const Layout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    console.log(logPageView());
  }, []);

  const { loading } = useAppSelector((state) => ({
    loading: state.getQuestions.loading,
  }));

  return (
    <div className="flex flex-col items-center">
      {!loading && <Navbar />}
      {children}
      {!loading && <Footer />}
    </div>
  );
};

export default Layout;
