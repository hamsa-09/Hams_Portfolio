import React from "react";
import ProjectCard from "./components/ProjectCard";
import SectionInfo from "../../common/SectionInfo";
import Renewly from "../../assets/renewly-5.png";
import Transport from "../../assets/tpw-3.png";
import Disaster from "../../assets/drm-3.png";
import ProjectPortal from "../../assets/psp.png";
import Notes from "../../assets/notes.png";
import Codepen from "../../assets/codepen.png";

const Projects = () => {
  const projects = [
    {
      image: Renewly,
      name: "Renewly - Subscription Tracker",
      description:
        "A subscription management app to track your monthly and yearly subscriptions with reminder notifications.",
      techStacks: [
        { name: "React", color: "#2563eb", bgColor: "#dbeafe" },
        { name: "Tailwind CSS", color: "#0891b2", bgColor: "#cffafe" },
        { name: "Node.js", color: "#22c55e", bgColor: "#dcfce7" },
        { name: "MongoDB", color: "#16a34a", bgColor: "#bbf7d0" },
      ],
       liveLink:"https://renewly.onrender.com",
      githubLink:"https://github.com/muhammedArsath/renewly.git"
    },
    {
      image: Transport,
      name: "Transport Permit Website",
      description:
        "A web portal for managing and issuing transport permits efficiently for government authorities.",
      techStacks: [
        { name: "React", color: "#2563eb", bgColor: "#dbeafe" },
        { name: "Tailwind CSS", color: "#0891b2", bgColor: "#cffafe" },
        { name: "Spring Boot", color: "#16a34a", bgColor: "#dcfce7" },
        { name: "MySQL", color: "#0ea5e9", bgColor: "#e0f2fe" },
      ],

      githubLink:"https://github.com/hamsa-09"
    },
    {
      image: Disaster,
      name: "Disaster Relief Coordination",
      description:
        "A platform to coordinate and manage disaster relief resources and volunteers during emergencies.",
      techStacks: [
        { name: "React", color: "#2563eb", bgColor: "#dbeafe" },
        { name: "Tailwind CSS", color: "#0891b2", bgColor: "#cffafe" },
        { name: "Node.js", color: "#22c55e", bgColor: "#dcfce7" },
        { name: "MongoDB", color: "#16a34a", bgColor: "#bbf7d0" },
      ],

      githubLink:"https://github.com/hamsa-09"
    },
    {
      image: ProjectPortal,
      name: "Project Selection Portal",
      description:
        "A portal for students and faculty to manage and select academic projects seamlessly.",
      techStacks: [
        { name: "React", color: "#2563eb", bgColor: "#dbeafe" },
        { name: "Tailwind CSS", color: "#0891b2", bgColor: "#cffafe" },
        { name: "Node.js", color: "#22c55e", bgColor: "#dcfce7" },
        { name: "MongoDB", color: "#16a34a", bgColor: "#bbf7d0" },
      ],
       liveLink:"https://bip-sps.onrender.com",
      githubLink:"https://github.com/hamsa-09"
    },
    {
      image: Notes,
      name: "Note App",
      description:
        "A simple and intuitive note-taking application with cloud sync and search functionality.",
      techStacks: [
        { name: "React", color: "#2563eb", bgColor: "#dbeafe" },
        { name: "CSS", color: "#0ea5e9", bgColor: "#e0f2fe" },
        { name: "Spring Boot", color: "#16a34a", bgColor: "#dcfce7" },
        { name: "MySQL", color: "#0ea5e9", bgColor: "#e0f2fe" },
      ],
       liveLink:"https://hams-note-app.netlify.app/",
      githubLink:"https://github.com/hamsa-09"
    },
    {
      image: Codepen, // replace with your actual image import or path
      name: "CodePen Clone",
      description:
        "A web-based code editor and playground with live preview, syntax highlighting, and integrated Codieum compiler.",
      techStacks: [
        { name: "React", color: "#2563eb", bgColor: "#dbeafe" },
        { name: "CSS", color: "#0ea5e9", bgColor: "#e0f2fe" },
        { name: "Codieum", color: "#a21caf", bgColor: "#f3e8ff" },
      ],
      liveLink:"https://hams-codepen.netlify.app/",
      githubLink:"https://github.com/hamsa-09"
    },
  ];
  return (
    <div className=" w-full p-4 md:px-20 flex flex-col justify-between items-center space-y-4 md:space-y-8">
      <SectionInfo heading={"Projects"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {projects.map((project, id) => {
          return (
            <ProjectCard
              key={id}
              title={project.name}
              description={project.description}
              techstack={project.techStacks}
              image={project.image}
              githubLink={project.githubLink}
              LiveLink={project.liveLink}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
