import React from "react";

const Hero = () => {
  return (
    <div
      className="w-full bg-red-500 h-[51.5rem] flex flex-col items-center justify-center"
      // style={{
      //   backgroundColor: "red",
      // }}
    >
      <div className="w-[64.1%] flex flex-col items-center">
        <h2 className="text-white text-sixth sm:text-[5rem] mb-5 text-center">
          Your Financial Journey Starts Here
        </h2>
        <p className=" text-secondary sm:text-[1.375rem] text-center text-white mb-8">
          Personal & Group Savings. Fx Remittance. Pay School Fees. Student
          Loans. And more.
        </p>

        <div className="relative w-full">
          <input
            type="text"
            placeholder="Your email"
            className="w-full h-[4.25rem] sm:h-[5rem] rounded-[4.25rem] bg-white xs:pl-16 pl-24"
          />
          <div className="hidden bg-btn rounded-[3.25rem] absolute top-1/2 -translate-y-1/2 right-2 h-[3.5rem] sm:h-[4rem] xs:flex items-center px-6 text-white">
            <h3 className="">Join our waitlist</h3>
          </div>
        </div>
        <div className="xs:hidden bg-btn rounded-[3.25rem] mt-3 h-[3.5rem] sm:h-[4rem] flex items-center px-6 text-white">
          <h3 className="">Join our waitlist</h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
