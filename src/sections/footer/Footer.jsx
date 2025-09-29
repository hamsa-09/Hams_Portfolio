import React from "react";
import SectionInfo from "../../common/SectionInfo";
import Email from "../../assets/gmail.svg";
import Linkedin from "../../assets/linkedin.svg";
import Github from "../../assets/github.svg";
const Footer = () => {
  return (
    <footer className="mt-12 py-8 text-center text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
      <SectionInfo heading={"Contact Info"} />
      <div className="mb-4 flex justify-center items-center space-x-8" >
        <p>
          <a
            href="mailto:your.email@example.com"
            className="text-purple-600 dark:text-purple-400 underline"
          >
            <img src={Email} alt="" className="w-10 h-10 object-contain" />
          </a>
        </p>
        <p>
     
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 dark:text-purple-400 underline"
          >
            <img src={Linkedin} alt="" className="w-10 h-10 object-contain" />
          </a>
        </p>
        <p>
         
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 dark:text-purple-400 underline"
          >
            <img src={Github} alt="" className="w-10 h-10 object-contain" />
          </a>
        </p>
      </div>
      <p className="mb-2">Thanks for visiting my portfolio!</p>
      <p className="text-xs">
        &copy; {new Date().getFullYear()} Hamsa.io. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
