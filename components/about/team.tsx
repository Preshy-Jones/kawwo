import Image from "next/image";
import React from "react";

const Team = () => {
  const teamMembersData = [
    {
      name: "Alexander kawwo",
      position: "Founder & CEO",
    },
    {
      name: "Alexander kawwo",
      position: "Founder & CEO",
    },
    {
      name: "Alexander kawwo",
      position: "Founder & CEO",
    },
  ];
  return (
    <div className="flex justify-center">
      <div className="w-[73.375%]">
        <h2 className="text-center text-[4rem] mt-8">Meet the team</h2>
        <p className="text-center text-[2.5rem] font-semibold text-tertiary text-opacity-90">
          Passionate Minds Driving Financial Empowerment
        </p>
        <p className="mb-8 text-center mt-6">
          Our diverse team of passionate fintech experts brings together a
          wealth of expertise in finance, technology, and customer service.
          We're united by a common goal: to empower individuals and businesses
          to achieve financial success.
        </p>
        <div>
          <div className="grid grid-cols-3 gap-x-10">
            {teamMembersData.map((member, index) => {
              return <TeamMember key={index} member={member} />;
            })}
          </div>
        </div>
        <div>
          <h2 className="text-center text-[4rem] mt-8">The Kawwo Difference</h2>
          <p className="mb-8 text-center mt-6">
            “In a world often constrained by traditional banking, Kawwo emerges
            as a transformative force, empowering individuals and businesses to
            take charge of their financial journeys with confidence and ease.
            Our innovative and accessible fintech solutions transcend
            conventional boundaries, providing a user-centric experience that
            caters to every financial need. Join us on our mission to create a
            more inclusive and equitable financial world, where you can unlock
            your financial potential and achieve your dreams.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;

const TeamMember = ({
  member,
}: {
  member: {
    name: string;
    position: string;
  };
}) => {
  return (
    <div className="">
      <div className="h-[26.5rem] bg-black rounded-2xc">{/* <Image /> */}</div>
      <div className="mt-12 flex flex-col items-center">
        <h2 className=" text-2.5xl text-tertiary text-opacity-95 font-medium">
          {member.name}
        </h2>
        <h3 className=" text-secondary text-opacity-60">{member.position}</h3>
      </div>
    </div>
  );
};
