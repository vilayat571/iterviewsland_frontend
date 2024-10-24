import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <div className="w-full flex items-center justify-center">
        <div className="w-4/5">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
