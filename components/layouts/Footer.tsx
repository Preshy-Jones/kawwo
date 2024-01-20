import Image from "next/image";
import React from "react";
import footerLogo from "../../public/footer-logo.svg";

const Footer = () => {
  return (
    <div className="bg-black flex justify-center pb-14">
      <div className="w-[82.22%]">
        <div className="flex justify-between">
          <div className="w-[20%]">
            <Image src={footerLogo} alt="footer-logo" />
          </div>
          <div className="grid grid-cols-4 w-[80%]">
            {footerData.map((data, index) => (
              <div key={index}>
                <h2 className=" text-white ">{data.header}</h2>
                {data.subs.map((sub, index) => (
                  <h4 className="text-footer" key={index}>
                    {sub}
                  </h4>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const footerData = [
  {
    header: "Product",
    subs: [
      "Personal Savings",
      "Group Savings",
      "Fx Remittance / Send",
      "Bill pay",
      "Startups",
      "Business account",
      "Financial modeling",
    ],
  },
  {
    header: "Platform",
    subs: [
      "Kawwo software",
      "Mobile app",
      "Native integrations",
      "NIMC API",
      "Mobile app",
      "API",
    ],
  },

  {
    header: "Company",
    subs: [
      "About Kawwo",
      "Careers",
      "Contact",
      "Partner portal",
      "Press",
      "Security",
    ],
  },
  {
    header: "Resources",
    subs: [
      "Help center",
      "Resource center & blog",
      "Accounting services",
      "Status",
      "Legal agreement",
      "Privacy",
      "Cookie preferences",
    ],
  },
];
