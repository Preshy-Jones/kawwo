import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Waitlist from "../about/waitlist";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <NavBar />
      <main>{children}</main>
      <Waitlist />
      <Footer />
    </div>
  );
};

export default DefaultLayout;
