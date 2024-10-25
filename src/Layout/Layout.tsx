import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "react-scroll-to-top";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <div className="w-full flex items-center justify-center">
        <div className="w-4/5">{children}</div>
      </div>
      <ScrollToTop
        top={20}
        color="black"
        style={{
          borderRadius: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "8px",
        }}
        smooth
      />
      <Footer />
    </div>
  );
};

export default Layout;
