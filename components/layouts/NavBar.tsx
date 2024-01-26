import React, { useContext, useState } from "react";
import kawwoLogo from "../../public/kawwo-logo.svg";
import Image from "next/image";
import Hamburger from "../../public/hamburger.svg";
import Link from "next/link";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full  py-3 flex justify-center ">
      <div className="w-[82.22%] relative">
        <div className=" flex items-center justify-between">
          <Image src={kawwoLogo} alt="kawwo-logo" className="" />
          <ul className="lg:flex justify-around w-[50%] hidden">
            <Link href={"#"} className="">
              Products
            </Link>
            <Link href={"#"} className="">
              Use cases
            </Link>
            <Link href={"#"} className="">
              Pricing
            </Link>
            <Link href={"/about"} className="">
              About us
            </Link>
            <Link href={"#"} className="">
              Consumers
            </Link>
          </ul>
          <div className="lg:flex items-center hidden">
            <h2 className="text-primary font-bold leading-[1.361875rem] mr-5">
              Create an account
            </h2>
            <button className=" border-primaryc border rounded-md py-2 px-7">
              Sign in
            </button>
          </div>
          <div
            onClick={() => setShowMenu(!showMenu)}
            className="cursor-pointer"
          >
            <Image src={Hamburger} alt="hamburger-icon" className="lg:hidden" />
          </div>
        </div>
        {showMenu && (
          <div className="mt-5 absolute bg-white w-full py-5">
            <ul className="grid justify-items-center gap-y-2">
              <Link href={"#"} className="">
                Products
              </Link>
              <Link href={"#"} className="">
                Use cases
              </Link>
              <Link href={"#"} className="">
                Pricing
              </Link>
              <Link href={"/about"} className="">
                About us
              </Link>
              <Link href={"#"} className="">
                Consumers
              </Link>
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
        )}
      </div>
    </div>
  );
};

export default NavBar;
