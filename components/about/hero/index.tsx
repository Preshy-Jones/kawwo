const Hero = () => {
  return (
    <div
      className="w-full bg-red-500 h-[51.5rem] flex flex-col items-center justify-center"
      // style={{
      //   backgroundColor: "red",
      // }}
    >
      <div className="w-[64.1%] flex flex-col items-center">
        <h2 className="text-white text-[4rem] mb-5">About Kawwo</h2>
        <p className="text-secondaryc text-[1.75rem] text-center">
          At Kawwo, we believe that financial well-being is the cornerstone of a
          fulfilling life. That&apos;s why we&apos;re committed to empowering individuals
          and businesses to take control of their finances and achieve their goals
          through innovative and accessible fintech solutions.
        </p>
      </div>
    </div>
  );
};

export default Hero;
