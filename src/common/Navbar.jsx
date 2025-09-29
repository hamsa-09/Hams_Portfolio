import React, { useContext, useState } from "react";
import ActionBtn from "./ActionBtn";
import Github from "../assets/github.svg";
import { Menu, X, Moon, Sun } from "lucide-react";
import ThemeToggleButton from "./ThemeToggleButton";
const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  // const { isDark, toggleTheme } = useContext(ThemeContext);
  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };
  return (
    <div className="relative ">
      <nav className="bg-white/90 backdrop-blur-3xl dark:bg-black/90   fixed z-40 w-full py-6 px-6 lg:px-14 flex justify-between items-center">
        <h1 className="">Hamsa.io</h1>
        <ul className=" dark:text-white lg:flex justify-center items-center space-x-8 font-semibold hidden">
          <a href="#Home">
            <li>Home</li>
          </a>
          <a href="#About">
            <li>About</li>
          </a>
          <a href="#Education">
            <li>Education</li>
          </a>
          <a href="#Skills">
            <li>Skills</li>
          </a>
          <a href="#Project">
            <li>Projects</li>
          </a>
          <a href="#Contact">
            <li>Contact</li>
          </a>

          <div className=" dark:text-white hidden lg:block">
            <ThemeToggleButton />
          </div>
        </ul>

        <div className="flex justify-center items-center space-x-4 lg:hidden">
          <div className="lg:hidden dark:text-white">
            <ThemeToggleButton />
          </div>
          <span
            className="dark:text-white cursor-pointer lg:hidden"
            onClick={toggleMobileNav}
          >
            <Menu />
          </span>
        </div>

        <ul
          className={`fixed transition-all duration-500  inset-0 py-5 px-2 flex flex-col justify-start space-y-10 bg-white/90 dark:bg-black/90 backdrop-blur-3xl min-h-svh w-full z-50 ${
            isMobileNavOpen ? "translate-x-0" : "translate-x-[200%]"
          }`}
        >
          <span
            className=" dark:text-white absolute right-2 "
            onClick={toggleMobileNav}
          >
            <X />
          </span>
          <a href="#Home"  onClick={toggleMobileNav}>
            {" "}
            <li>Home</li>
          </a>
          <a href="#About"  onClick={toggleMobileNav}>
            <li>About</li>
          </a>
          <a href="#Education"  onClick={toggleMobileNav}>
            <li>Education</li>
          </a>
          <a href="#Skills"  onClick={toggleMobileNav}>
            <li>Skills</li>
          </a>
          <a href="#Project" onClick={toggleMobileNav}>
            <li>Projects</li>
          </a>
          <a href="#Contact"  onClick={toggleMobileNav}>
            <li>Contact</li>
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
