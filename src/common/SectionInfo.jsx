import React from "react";

const SectionInfo = ({ heading, description }) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 ">
      <h2>{heading}</h2>
      <p className="text-center">{description}</p>
    </div>
  );
};

export default SectionInfo;
