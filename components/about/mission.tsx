import Image from "next/image";
import React from "react";
import missionImage from "../../public/mission.svg";

const Mission = () => {
  
  return (
    <div className="flex justify-center">
      <div className="w-[73.375%]">
        <h2 className="text-center text-[4rem] mt-8">Our Mission</h2>
        <p className="text-center text-[2.5rem] font-semibold text-tertiary text-opacity-90">
          Financial Empowerment for All
        </p>
        <p className="mb-8 text-center mt-6">
          We envision a world where everyone has equal access to the financial
          tools and resources they need to thrive. By bridging the gap between
          traditional banking and cutting-edge technology, Kawwo empowers
          individuals and businesses to:
        </p>
        <div className="flex justify-center">
          <div className="flex">
            <Image src={missionImage} alt="" />
            <div>
              <div className="mb-16">
                <h2 className="h-[1.75rem] text-black font-medium text-[1.125rem]">
                  Manage their finances seamlessly
                </h2>
                <p className="text-[1.125rem] leading-[1.8125rem]">
                  Our user-friendly platform streamlines financial tasks, making
                  it easy to track expenses, set savings goals, and make
                  informed financial decisions.
                </p>
              </div>
              <div className="mb-16">
                <h2 className="h-[1.75rem] text-black font-medium text-[1.125rem]">
                  Access affordable and flexible financial services
                </h2>
                <p className="text-[1.125rem] leading-[1.8125rem]">
                  We offer a comprehensive suite of financial products,
                  including Personal Savings, Group Savings, FX Remittance,
                  Proof of Funds, Pay School Fees Abroad, and Student Loans,
                  tailored to meet diverse needs and budgets.
                </p>
              </div>
              <div className="mb-16">
                <h2 className="h-[1.75rem] text-black font-medium text-[1.125rem]">
                  Embrace financial security and confidence
                </h2>
                <p className="text-[1.125rem] leading-[1.8125rem]">
                  We employ robust security measures to safeguard user data and
                  transactions, ensuring peace of mind and fostering trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
