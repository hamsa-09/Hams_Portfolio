import React from "react";
import HomeLeft from "./components/HomeLeft";
import CodeBlock from "./components/Editor";

const Home = () => {
  return (
    <div className=" w-full p-4 md:px-20 flex flex-col md:flex-row justify-between items-center  ">
      <HomeLeft />
      <CodeBlock />
    </div>
  );
};

export default Home;
