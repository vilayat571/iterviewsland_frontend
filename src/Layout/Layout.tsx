import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { logPageView } from "../constants/Pageview";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
   console.log( logPageView())
    setLoading(false);
  }, []);

  return (
    <div className="flex flex-col items-center">
      {loading ? (
        "Loading"
      ) : (
        <>
          <Navbar />
          {children}
          <Footer />
        </>
      )}
    </div>
  );
};

export default Layout;
