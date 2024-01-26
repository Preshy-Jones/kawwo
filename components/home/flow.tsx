import React from "react";
import wifiLogo from "../../public/wifi.svg";
import idCard from "../../public/id_card.svg";
import check from "../../public/check.svg";
import Image from "next/image";
import userImage from "../../public/user.svg";
import peopleImage from "../../public/people.svg";
import coinsImage from "../../public/coins.svg";
import houseImage from "../../public/house.svg";
import graduationHatImage from "../../public/graduation-hat.svg";
import rightArrowImage from "../../public/right-arrow.svg";

const Flow = () => {
  return (
    <div className="flex justify-center py-16">
      <div className="w-[82.15%]">
        <div className=" flex flex-col items-center">
          <h2 className="text-[2.5rem] text-center">
            Products Built to Amplify Each Other
          </h2>
          <p className="text-secondary font-medium text-secondaryc text-opacity-70 text-center">
            Kawwo&apos;s integrated ecosystem isn&apos;t just about providing
            single-purpose solutions. It&apos;s about empowering you to transform
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
          <h2 className="font-medium text-sixth text-center mb-6">
            Shift from Reactive to Proactive Excellence.
          </h2>
          <p className="font-medium text-center text-tertiaryc text-opacity-95">
            Unlock the power of proactive financial management with Kawwo&apos;s
            innovative products. Our comprehensive suite, powered by the unified
            Empower platform, revolutionizes your financial journey. Seamlessly
            transition from reactive to proactive, leveraging cutting-edge
            features designed to automate manual tasks and prevent unwanted
            expenditures before they occur.
          </p>
        </div>
        <div className="py-16">
          <h2 className="font-medium text-sixth text-center text-tertiaryc mb-6">
            Tailored Solutions for Every Goal.
          </h2>
          <p className="font-medium text-center text-secondaryc text-opacity-70 mb-12">
            Discover a Suite of Innovative Financial Features Designed to
            Empower You on Your Path to Success.
          </p>
          <div className="grid grid-cols-3 gap-6">
            <div className=" rounded-2xc border border-bgx p-6 bg-opacity-25">
              <Image src={userImage} alt="user" className="" />
              <h2 className="font-medium text-fifth mt-5 mb-3">
                Personal Savings
              </h2>
              <p className="text-secondaryc text-secondary text-opacity-70 font-medium">
                Secure your financial future effortlessly. Our Personal Savings
                feature empowers you to set and achieve your financial goals
                with ease. Start building your wealth today, one step at a time.
              </p>
            </div>
            <div className=" rounded-2xc border border-bgx p-6 bg-opacity-25">
              <Image src={userImage} alt="user" className="" />
              <h2 className="font-medium text-fifth mt-5 mb-3">
                Group Savings
              </h2>
              <p className="text-secondaryc text-secondary text-opacity-70 font-medium">
                Collaborate for financial success! Group Savings lets you pool
                resources with friends or family, turning saving into a team
                effort. Achieve shared goals faster and enjoy the journey
                together.
              </p>
            </div>
            <div className=" rounded-2xc border border-bgx p-6 bg-opacity-25">
              <Image src={userImage} alt="user" className="" />
              <h2 className="font-medium text-fifth mt-5 mb-3">
                Fx Remittance/Send
              </h2>
              <p className="text-secondaryc text-secondary text-opacity-70 font-medium">
                Global money transfers made simple. With our FX Remittance
                feature, sending money is fast, secure, and cost-effective.
                Connect with loved ones or manage your international
                transactions.
              </p>
            </div>
            <div className=" rounded-2xc border border-bgx p-6 bg-opacity-25">
              <Image src={userImage} alt="user" className="" />
              <h2 className="font-medium text-fifth mt-5 mb-3">
                Proof of Funds
              </h2>
              <p className="text-secondaryc text-secondary text-opacity-70 font-medium">
                Navigate paperwork effortlessly. Our Proof of Funds feature
                simplifies documentation, making it easy to demonstrate your
                financial stability. For any purpose, trust us to streamline the
                process.
              </p>
            </div>{" "}
            <div className=" rounded-2xc border border-bgx p-6 bg-opacity-25">
              <Image src={userImage} alt="user" className="" />
              <h2 className="font-medium text-fifth mt-5 mb-3">
                School Fees Abroad
              </h2>
              <p className="text-secondaryc text-secondary text-opacity-70 font-medium">
                Education knows no borders, and neither should your payments.
                Pay for school fees abroad hassle-free. Our streamlined process
                ensures that your educational dreams are just a click away.
              </p>
            </div>
            <div className=" rounded-2xc border border-bgx p-6 bg-opacity-25">
              <Image src={userImage} alt="user" className="" />
              <h2 className="font-medium text-fifth mt-5 mb-3">
                Students Loans
              </h2>
              <p className="text-secondaryc text-secondary text-opacity-70 font-medium">
                Plan your future future. Our Student Loans feature provides
                flexible and affordable financing options, making education
                accessible. Focus on learning; We&apos;ve got the financial support
                covered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flow;
