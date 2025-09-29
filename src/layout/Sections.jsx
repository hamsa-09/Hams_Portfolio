import React, { useEffect, useState } from "react";
import Navbar from "../common/Navbar";
import Home from "../sections/home/Home";
import Skills from "../sections/skills/Skills";
import Project from "../sections/projects/Projects";
import { ChevronUp } from "lucide-react";
import About from "../sections/about/About";
import Education from "../sections/education/Education";
import Cursor from "../common/Cursor";
import Footer from "../sections/footer/Footer";
import ClickSpark from "../sections/about/components/Clickspark";

const Sections = () => {
  const [percentageScrolled, setPercentageScrolled] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      const scrolled = (scrollTop / (fullHeight - windowHeight)) * 100;
      setPercentageScrolled(scrolled);
    };
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <ClickSpark
      sparkColor="#fff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div className="bg-white dark:bg-black">
        <Navbar />

        {/* track bar  */}
        <div className="fixed top-[5.5rem] lg:top-[6.4rem] z-30 w-full">
          <div
            className={`bg-purple-500  h-1 rounded-r-full transition-all duration-75`}
            style={{ width: `${percentageScrolled}%` }}
          ></div>
        </div>

        {/* sections  */}
        <div className="flex flex-col space-y-8 lg:space-y-12 lg:px-16">
          <section className="pt-24 scroll-m-20" id="Home">
            <Home />
          </section>
          <section className="scroll-mt-28" id="About">
            <About />
          </section>
          <section className="scroll-mt-28" id="Education">
            <Education />
          </section>
          <section className="scroll-mt-28" id="Skills">
            <Skills />
          </section>
          <section className="scroll-mt-28" id="Project">
            <Project />
          </section>
          <section className="" id="Contact">
            <Footer />
          </section>
        </div>

        {/* top scroll button  */}
        <button className="fixed right-8 bottom-8 flex justify-center items-center  bg-gray-300 dark:bg-gray-900 dark:text-white p-2 rounded-full cursor-pointer">
          <ChevronUp />
        </button>
      </div>
    </ClickSpark>
  );
};

export default Sections;
