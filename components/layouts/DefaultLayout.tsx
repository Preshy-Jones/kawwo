import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
