import React from "react";
import wifiLogo from "../../public/wifi.svg";
import idCard from "../../public/id_card.svg";
import check from "../../public/check.svg";
import Image from "next/image";

const Flow = () => {
  return (
    <div className="flex justify-center py-16">
      <div className="w-[82.15%]">
        <div className=" flex flex-col items-center">
          <h2 className="text-[2.5rem] text-center">
            Products Built to Amplify Each Other
          </h2>
          <p className="text-secondary font-medium text-secondaryc text-opacity-70 text-center">
            Kawwo's integrated ecosystem isn't just about providing
            single-purpose solutions. It's about empowering you to transform
            your entire financial landscape.
          </p>
        </div>
        <div className=" grid grid-cols-3 gap-x-6 py-16">
          <div className="bg-txt px-4 py-4">
            <Image src={wifiLogo} alt="wifi" />
            <h2 className="text-fifth mt-6">NIN Verification & Enrolment</h2>
            <p className=" text-secondary text-secondaryc text-opacity-70 mt-4 font-medium">
              Identity verification & enrolment Safe and quick transactions
              Student status verification.
            </p>
          </div>
          <div className="bg-txt px-4 py-4">
            <Image src={idCard} alt="wifi" />
            <h2 className="text-fifth mt-6">Safe and quick transactions</h2>
            <p className=" text-secondary font-medium text-secondaryc text-opacity-70 mt-4">
              Enjoy the peace of mind that comes with every transaction, knowing
              that we prioritize both safety and speed.
            </p>
          </div>
          <div className="bg-txt px-4 py-4">
            <Image src={check} alt="wifi" />
            <h2 className="text-fifth mt-6">Student Status Verification</h2>
            <p className=" text-secondary font-medium text-secondaryc text-opacity-70 mt-4">
              Enjoy the peace of mind that comes with every transaction, knowing
              that we prioritize both safety and speed.
            </p>
          </div>
        </div>
        <div className="py-16">
          <h2 className="font-medium text-sixth text-center mb-6">Shift from Reactive to Proactive Excellence.</h2>
          <p className="font-medium text-center text-tertiaryc text-opacity-95">
            Unlock the power of proactive financial management with Kawwo's
            innovative products. Our comprehensive suite, powered by the unified
            Empower platform, revolutionizes your financial journey. Seamlessly
            transition from reactive to proactive, leveraging cutting-edge
            features designed to automate manual tasks and prevent unwanted
            expenditures before they occur.
          </p>
        </div>
        <div className="py-16">
          <h2 className="font-medium text-sixth text-center text-tertiaryc mb-6">Tailored Solutions for Every Goal.</h2>
          <p className="font-medium text-center text-secondaryc text-opacity-70">
            Unlock the power of proactive financial management with Kawwo's
            innovative products. Our comprehensive suite, powered by the unified
            Empower platform, revolutionizes your financial journey. Seamlessly
            transition from reactive to proactive, leveraging cutting-edge
            features designed to automate manual tasks and prevent unwanted
            expenditures before they occur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Flow;
