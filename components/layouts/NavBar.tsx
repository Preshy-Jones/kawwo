import React, { useContext, useState } from "react";
import kawwoLogo from "../../public/kawwo-logo.svg";
import Image from "next/image";
import Hamburger from "../../public/hamburger.svg";

const NavBar = () => {
  return (
    <div className="w-full  py-3 flex justify-center ">
      <div className="w-[82.22%]">
        <div className=" flex items-center justify-between">
          <Image src={kawwoLogo} alt="kawwo-logo" className="" />
          <ul className="lg:flex justify-around w-[50%] hidden">
            <li className="">Products</li>
            <li className="">Use cases</li>
            <li className="">Pricing</li>
            <li className="">About us</li>
            <li className="">Consumers</li>
          </ul>
          <div className="lg:flex items-center hidden">
            <h2 className="text-primary font-bold leading-[1.361875rem] mr-5">
              Create an account
            </h2>
            <button className=" border-primaryc border rounded-md py-2 px-7">
              Sign in
            </button>
          </div>
          <Image
            src={Hamburger}
            alt="hamburger-icon"
            className="lg:hidden cursor-pointer"
          />
        </div>
        <div className="mt-5">
          <ul className="grid justify-items-center gap-y-2">
            <li className="">Products</li>
            <li className="">Use cases</li>
            <li className="">Pricing</li>
            <li className="">About us</li>
            <li className="">Consumers</li>
          </ul>
          <div className="flex flex-col items-center mt-3">
            <h2 className="text-primary font-bold leading-[1.361875rem] mb-3">
              Create an account
            </h2>
            <button className=" border-primaryc border rounded-md py-2 px-7">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
