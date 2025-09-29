import React from "react";
import TimeLine from "./components/TimeLine";
import SectionInfo from "../../common/SectionInfo";

const Education = () => {
  return (
    <div className=" w-full p-4 md:px-20 flex flex-col justify-between items-center space-y-4 md:space-y-8">
      <SectionInfo heading={"Education"}/>
      <TimeLine />
    </div>
  );
};

export default Education;
