import React, { useState } from "react";
import PlusIcon from "../../public/plus.svg";
import MinusIcon from "../../public/minus.svg";
import Image from "next/image";

const FAQ = () => {
  return (
    <div className="flex justify-center py-16">
      <div className="w-[82.15%]">
        <h1 className=" text-sixth">Frequently Asked Questions (FAQs)</h1>
        <div>
          {faqContent.map((item, index) => (
            <FaqOption key={index} title={item.title} summary={item.content} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

const FaqOption = ({ title, summary }: { title: string; summary: string }) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <div
      className="bg-bgPrimary rounded-[1.25rem] mb-4 cursor-pointer"
      onClick={() => setOpen(!isOpen)}
    >
      <div className="flex items-center justify-between py-4 px-4 rounded-lg">
        <h3 className=" font-lato">{title}</h3>
        {isOpen ? (
          <Image src={MinusIcon} alt="minus" />
        ) : (
          <Image src={PlusIcon} alt="plus" />
        )}
      </div>
      <div
        className={`transition-max-height ease-in-out duration-300 overflow-hidden px-4 ${
          isOpen ? "py-4" : "max-h-0"
        }`}
      >
        <p className="py-4">{summary}</p>
        <div className="h-[1px] bg-black bg-opacity-20"></div>
      </div>
    </div>
  );
};

const faqContent = [
  {
    title: "How does Personal Savings work?",
    content:
      "Absolutely! Group Savings is designed for collaborative saving. Invite friends or family, set a savings goal together, and watch your funds grow as a team.",
  },
  {
    title: "How secure is the FX Remittance feature?",
    content:
      "Absolutely! Group Savings is designed for collaborative saving. Invite friends or family, set a savings goal together, and watch your funds grow as a team.",
  },
  {
    title: "What currencies are supported for international transfers?",
    content:
      "Absolutely! Group Savings is designed for collaborative saving. Invite friends or family, set a savings goal together, and watch your funds grow as a team.",
  },
  {
    title: "How can I pay for school fees abroad using your app?",
    content:
      "Absolutely! Group Savings is designed for collaborative saving. Invite friends or family, set a savings goal together, and watch your funds grow as a team.",
  },
  {
    title: "What are the eligibility criteria for Student Loans?",
    content:
      "Absolutely! Group Savings is designed for collaborative saving. Invite friends or family, set a savings goal together, and watch your funds grow as a team.",
  },
  {
    title: "How does Proof of Funds simplify documentation?",
    content:
      "Absolutely! Group Savings is designed for collaborative saving. Invite friends or family, set a savings goal together, and watch your funds grow as a team.",
  },
  {
    title: "Is my personal information secure?",
    content:
      "Absolutely! Group Savings is designed for collaborative saving. Invite friends or family, set a savings goal together, and watch your funds grow as a team.",
  },
];
