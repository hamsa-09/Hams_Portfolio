import React from "react";

const Card = ({ icon, title, description, index }) => {
  return (
    <div className="flex flex-col p-4 space-y-4 max-w-sm overflow-hidden rounded-lg bg-white dark:bg-[#181818] border border-transparent shadow-lg dark:shadow-black/50">
      <div className="flex items-center gap-4">
        {icon}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {title}
        </h3>
      </div>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
};

export default Card;
