import React from "react";

const Statistics = () => {
  return (
    <div className="flex-1 w-full grid grid-cols-2 grid-rows-2 md:grid-cols-3 md:grid-rows-1 gap-4 bg-white shadow-lg dark:bg-[#181818] dark:shadow-black/50 rounded-lg p-4">
      {/* Top Left */}
      <div className="flex flex-col justify-center items-center bg-black/10 dark:bg-white/10 rounded-lg">
        <h3>Tech Stacks</h3>
        <p className="flex justify-center items-center space-x-2">
          <span className="text-purple-800 text-[24px] mr-2">5+</span> Technologies
        </p>
      </div>

      {/* Top Right */}
      <div className="flex flex-col justify-center items-center bg-black/10 dark:bg-white/10 rounded-lg">
        <h3>Total Projects</h3>
        <p className="flex justify-center items-center space-x-2">
          <span className="text-purple-800 text-[24px] mr-2">10+</span> projects
        </p>
      </div>

      {/* Bottom Full Width (only spans in mobile) */}
      <div className="col-span-2 md:col-span-1 p-4 rounded-md flex justify-center items-center flex-col bg-black/10 dark:bg-white/10">
        <h3>Years of Coding</h3>
        <p className="flex justify-center items-center space-x-2">
          <span className="text-purple-800 text-[24px] mr-2">2+</span> years
        </p>
      </div>
    </div>
  );
};

export default Statistics;
