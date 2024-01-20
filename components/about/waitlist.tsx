import Image from "next/image";
import React from "react";
import histogram from "../../public/histogram.svg";

const Waitlist = () => {
  return (
    <div className="bg-black flex justify-center pt-24 pb-40">
      <div className="w-[74.17%] grid grid-cols-3 gap-x-5">
        <div className="col-start-1 col-end-3">
          <h2 className="font-medium text-white text-[2.5rem]">
            See what Kawwo can do for you.
          </h2>
          <p className="font-medium text-white text-secondary mb-12">
            No matter your goals - building wealth, saving with friends, sending
            money overseas, or making education a reality - Kawwo has the tools
            you need to get there.
          </p>
          <div className="relative w-full flex">
            <input
              type="text"
              placeholder="Your email"
              className="w-full h-[5rem] rounded-[4.25rem] bg-white pl-16"
            />
            <div className="bg-btn rounded-[3.25rem] absolute top-1/2 -translate-y-1/2 right-2 h-[4rem] flex items-center px-6">
              <h3 className="">Join our waitlist</h3>
            </div>
          </div>
        </div>
        <div className=" col-start-3 col-end-4">
          <Image src={histogram} alt="histogram" />
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
