import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children, NoEmail }) => {
  return (
    <div className={`flex flex-col min-h-screen `}>
      <Navbar />
      <main
        className={`flex-grow mt-[72px] ${
          NoEmail ? "mb-10" : "mb-[30vh] md:mb-[40vh]"
        }`}
      >
        {children}
      </main>
      <Footer NoEmail={NoEmail} />
    </div>
  );
};

export default Layout;
