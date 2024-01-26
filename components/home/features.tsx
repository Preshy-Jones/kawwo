import React from "react";

const Features = () => {
  return (
    <div className="flex justify-center py-16">
      <div className="w-[55.07%]">
        <div className=" mb-9">
          <h1 className="text-sixth">Get things done in no time</h1>
          <p className="text-primary text-bgr">
            You don&apos;t have to create an account first
          </p>
        </div>
        <div className="mb-12">
          <div className="grid grid-cols-9 mb-1">
            <div className="col-start-1 col-end-2">
              <h2>01</h2>
              <div className="w-[1px] h-[4rem] bg-primary ml-2"></div>
            </div>
            <div className="col-start-2 col-end-10">
              <h3>Explore Features</h3>
              <p className="text-bgr">
                Discover a suite of powerful financial tools. Explore Personal
                Savings, Group Savings, FX Remittance, Pay for School Fees
                Abroad, Students Loans, and Proof of Funds.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-9 mb-1">
            <div className="col-start-1 col-end-2">
              <h2>02</h2>
              <div className="w-[1px] h-[4rem] bg-primary ml-2"></div>
            </div>
            <div className="col-start-2 col-end-10">
              <h3>Choose Your Goal</h3>
              <p className="text-bgr">
                Select your financial objective, whether it&apos;s saving for the
                future, sending money globally, or funding your education. Our
                app adapts to your unique needs.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-9 mb-1">
            <div className="col-start-1 col-end-2">
              <h2>03</h2>
              <div className="w-[1px] h-[4rem] bg-primary ml-2"></div>
            </div>
            <div className="col-start-2 col-end-10">
              <h3>Seamless Transactions</h3>
              <p className="text-bgr">
                Experience seamless transactions. Our user-friendly interface
                ensures a smooth journey, from setting goals to achieving them,
                without unnecessary complexities.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-9 mb-1">
            <div className="col-start-1 col-end-2">
              <h2>04</h2>
              <div className="w-[1px] h-[4rem] bg-primary ml-2"></div>
            </div>
            <div className="col-start-2 col-end-10">
              <h3>Track and Celebrate</h3>
              <p className="text-bgr">
                Stay in control with real-time tracking. Celebrate milestones as
                you reach your financial goals. Your success story starts with a
                click.
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-full flex">
          <input
            type="text"
            placeholder="Your email"
            className="w-full h-[5rem] rounded-[4.25rem] text-red-500 bg-txt border-opacity-50 border-bgf border pl-16"
          />
          <div className="bg-btn rounded-[3.25rem] absolute top-1/2 -translate-y-1/2 right-2 h-[4rem] flex items-center px-6 text-white">
            <h3 className="">Join our waitlist</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
