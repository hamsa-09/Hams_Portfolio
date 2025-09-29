import React from "react";
import Html from "../../../assets/html.svg";
import Css from "../../../assets/css.svg";
import Tailwindcss from "../../../assets/tailwindcss.svg";
import Java from "../../../assets/java.svg";
import Javascript from "../../../assets/javascript.svg";
import ReactLogo from "../../../assets/reactjs.svg";
import Springboot from "../../../assets/springboot.svg";
import Mysql from "../../../assets/mysql.svg";
import Mongodb from "../../../assets/mongodb.svg";
import Github from "../../../assets/github.svg";
import Express from "../../../assets/express.svg";

const SkillSets = () => {
  const skillImages = [
    {
      image: Html,
      skillname: "HTML",
      description: "The standard markup language for creating web pages.",
      bgColor: "bg-orange-500",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      image: Css,
      skillname: "CSS",
      description:
        "A style sheet language for describing the presentation of a document.",
      bgColor: "bg-blue-500",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      image: Tailwindcss,
      skillname: "Tailwind CSS",
      description:
        "A utility-first CSS framework for rapidly building custom designs.",
      bgColor: "bg-cyan-500",
      link: "https://tailwindcss.com/",
    },
    {
      image: Java,
      skillname: "Java",
      description:
        "A high-level, class-based, object-oriented programming language.",
      bgColor: "bg-red-500",
      link: "https://www.java.com/",
    },
    {
      image: Javascript,
      skillname: "JavaScript",
      description: "A programming language that enables interactive web pages.",
      bgColor: "bg-yellow-500",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      image: ReactLogo,
      skillname: "React",
      description: "A JavaScript library for building user interfaces.",
      bgColor: "bg-sky-500",
      link: "https://react.dev/",
    },
    {
      image: Springboot,
      skillname: "Spring Boot",
      description: "An open-source Java-based framework for microservices.",
      bgColor: "bg-green-500",
      link: "https://spring.io/projects/spring-boot",
    },
    {
      image: Express,
      skillname: "Express JS",
      description: "A fast, minimal, and flexible Node.js web framework for building APIs and web applications.",
      bgColor: "bg-green-500",
      link: "https://spring.io/projects/spring-boot",
    },
    {
      image: Mysql,
      skillname: "MySQL",
      description: "An open-source relational database management system.",
      bgColor: "bg-blue-500",
      link: "https://www.mysql.com/",
    },
    {
      image: Mongodb,
      skillname: "MongoDB",
      description:
        "A source-available cross-platform document-oriented database program.",
      bgColor: "bg-green-500",
      link: "https://www.mongodb.com/",
    },
    {
      image: Github,
      skillname: "GitHub",
      description:
        "A provider of Internet hosting for software development and version control using Git.",
      bgColor: "bg-gray-500",
      link: "https://github.com/",
    },
  ];
  return (
    <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
      {skillImages.map((skill, _id) => {
        return (
          <a href={`${skill.link}`} key={_id} className="w-full h-full">
            <div className="flex flex-col space-y-2 justify-center items-center cursor-pointer bg-black/10 dark:bg-white/10 p-2 rounded-lg h-full">
              <img
                src={skill.image}
                alt={skill.skillname}
                className={`w-8 h-8 rounded-full p-1 bg-black/10 dark:${skill.bgColor}`}
              />
              <h3 className="font-semibold">{skill.skillname}</h3>
              <p className="text-center text-sm">{skill.description}</p>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default SkillSets;
