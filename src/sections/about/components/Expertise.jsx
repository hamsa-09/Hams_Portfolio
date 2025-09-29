import React from "react";
import Card from "./Card";
import { FaCode, FaPenNib, FaLightbulb } from "react-icons/fa";

const expertiseData = [
  {
    icon: <FaCode className="w-10 h-10 text-blue-500" />,
    title: "Web Development",
    description:
      "I build robust and scalable web applications using modern front-end and back-end technologies.",
  },
  {
    icon: <FaPenNib className="w-10 h-10 text-green-500" />,
    title: "UI/UX Design",
    description:
      "I design intuitive and engaging user interfaces with a strong focus on user experience and accessibility.",
  },
  {
    icon: <FaLightbulb className="w-10 h-10 text-yellow-500" />,
    title: "Problem Solving",
    description:
      "I excel at analyzing complex problems and delivering efficient, logical, and sustainable solutions.",
  },
];

const Expertise = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-8">
        {expertiseData.map((item, index) => (
          <Card
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
            index={index + 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Expertise;
