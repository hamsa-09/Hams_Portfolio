import React from "react";
import SectionInfo from "../../common/SectionInfo";
import SkillSets from "./components/SkillSets";
const Skills = () => {
  return (
    <div className=" w-full p-4 md:px-20 flex flex-col justify-between items-center space-y-4 md:space-y-8">
      <SectionInfo
        heading={"Skills"}
        description={
          "I build robust and scalable web applications using a diverse range of modern front-end and back-end technologies."
        }
      />
      <SkillSets />
    </div>
  );
};

export default Skills;
