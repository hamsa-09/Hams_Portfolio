import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Sections from "./layout/Sections";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once
      offset: 100, // offset (in px) from the original trigger point
    });
  }, []);
  return <Sections />;
};

export default App;
