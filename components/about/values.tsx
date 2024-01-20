import Image from "next/image";
import React from "react";
import valuesImage from "../../public/values.svg";

const OurValues = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[73.375%]">
        <h2 className="text-center text-[4rem] mt-8">Our Values</h2>
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
            <Image src={valuesImage} alt="value" />
            <div>
              <div className="mb-16">
                <h2 className="h-[1.75rem] text-black font-medium text-[1.125rem]">
                  Innovation
                </h2>
                <p className="text-[1.125rem] leading-[1.8125rem]">
                  We continuously push the boundaries of fintech, pioneering
                  solutions that empower our users to navigate the ever-evolving
                  financial landscape.
                </p>
              </div>

              <div className="mb-16">
                <h2 className="h-[1.75rem] text-black font-medium text-[1.125rem]">
                  Integrity
                </h2>
                <p className="text-[1.125rem] leading-[1.8125rem]">
                  Honesty, transparency, and accountability are paramount in our
                  interactions with our users, partners, and stakeholders.
                </p>
              </div>
              <div className="mb-16">
                <h2 className="h-[1.75rem] text-black font-medium text-[1.125rem]">
                  Collaboration
                </h2>
                <p className="text-[1.125rem] leading-[1.8125rem]">
                  We believe that synergy is key to achieving our goals. We
                  foster a collaborative environment, working closely with our
                  users and partners to create a flourishing financial
                  ecosystem.
                </p>
              </div>
              <div className="mb-16">
                <h2 className="h-[1.75rem] text-black font-medium text-[1.125rem]">
                  Empowerment
                </h2>
                <p className="text-[1.125rem] leading-[1.8125rem]">
                  Financial literacy and accessibility are at the forefront of
                  our mission. We strive to empower individuals and businesses
                  to take ownership of their financial futures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
