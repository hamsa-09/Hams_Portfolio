import React from "react";
import SectionInfo from "../../common/SectionInfo";
import AboutLeft from "./components/AboutLeft";
import AboutRight from "./components/AboutRight";
import Statistics from "./components/Statistics";
import Expertise from "./components/Expertise";
const About = () => {
  return (
    <div className="flex flex-col  justify-start items-center w-full">
      <SectionInfo heading={"About Me"} />
      <div className=" w-full p-2 md:px-20 flex flex-col md:flex-row justify-between items-center">
        <AboutLeft />
        <AboutRight />
      </div>
      <div className="w-full px-4 md:px-20 flex flex-col space-y-4 md:space-y-8">
        <Statistics />
        <Expertise />
      </div>
    </div>
  );
};

export default About;
