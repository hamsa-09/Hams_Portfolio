import React from "react";

const ActionBtn = ({ children }) => {
  return (
    <button className="flex justify-center items-center space-x-8 px-3 py-2 bg-purple-900 rounded-lg font-heading font-semibold cursor-pointer transition-all duration-500 hover:scale-105 text-[20px]">
      {children}
    </button>
  );
};

export default ActionBtn;
