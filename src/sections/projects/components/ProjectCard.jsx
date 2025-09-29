import React from "react";

const ProjectCard = ({
  image,
  title,
  description,
  techstack = [],
  githubLink,
  LiveLink,
}) => {
  return (
    <div className="group flex flex-col overflow-hidden rounded-lg bg-white dark:bg-[#181818] shadow-md transition-all duration-300 hover:shadow-2xl dark:shadow-black/50 border border-transparent dark:hover:border-white/10 max-w-sm">
      <div className="overflow-hidden">
        <img
          src={image}
          alt="demo_project"
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-4 space-y-3">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {techstack.map((stack, id) => {
            return (
              <span
                key={id}
                className={` text-xs font-medium px-2.5 py-0.5 rounded-full `}
                style={{ backgroundColor: stack.bgColor, color: stack.color }}
              >
                {stack.name}
              </span>
            );
          })}
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 flex-grow">
          {description}
        </p>
        <div className="flex items-center justify-start gap-4 pt-2">
          {LiveLink && (
            <a
              href={LiveLink}
              target="_blank"
              className="text-sm font-semibold text-white bg-gray-800 dark:bg-white dark:text-black px-4 py-2 rounded-md hover:bg-opacity-90"
            >
              Live Link
            </a>
          )}
          <a
            href={githubLink}
            target="_blank"
            className={`text-sm font-semibold px-4 py-2 rounded-md hover:bg-opacity-90 ${LiveLink ? "text-black dark:text-white ":" text-white bg-gray-800 dark:bg-white dark:text-black"}`}
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
