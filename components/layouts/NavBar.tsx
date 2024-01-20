import React, { useContext, useState } from "react";
import kawwoLogo from "../../public/kawwo-logo.svg";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="w-full  py-3 flex justify-center ">
      <div className="w-[82.22%] flex items-center justify-between">
        <Image src={kawwoLogo} alt="dd" />
        <ul className="flex justify-around">
          <li className="mr-2">Products</li>
          <li className="mr-2">Use cases</li>
          <li className="mr-2">Pricing</li>
          <li className="mr-2">About us</li>
          <li className="mr-2">Consumers</li>
        </ul>
        <div className="flex items-center">
          <h2 className="text-primary font-bold mr-3">Create an account</h2>
          <button className=" border-primary border rounded-md p-2">Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
