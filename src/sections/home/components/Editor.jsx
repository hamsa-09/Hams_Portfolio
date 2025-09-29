import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { github } from "react-syntax-highlighter/dist/esm/styles/hljs";
import {
  dracula,
  oneDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const aboutMe = ` //about me
let aboutMe = {
  name: "Hamsavardhini B",
  role: "Full Stack Developer",
  location: "India 🌏",
  //learnings and interest
  interests: ["Web Development", "Ui/Ux Designing" ],
  currentlyLearning: ["DevOps", "Cloud Computing", "Microservices",
  "Scalable Architecture"],
  //contact details
  contact: {
    email: "hamsavardhinibaskar@gmail.com",
    github: "https://github.com/hamsa-09",
    linkedin: "https://linkedin.com/in/hamsa-09",
  },
};

console.log("🚀 Welcome to my Portfolio!", aboutMe);`;

export default function CodeBlock() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
  }, []);
  return (
    <div
      className=" flex-1 w-full md:max-w-2xl scrollbar-custom"
      data-aos="zoom-in-up"
    >
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
        showLineNumbers
        wrapLongLines={false} // keep code scrollable on mobile
        customStyle={{
          borderRadius: "0.75rem",
          padding: "1rem",
          fontSize: "14px",
          fontFamily: "Mono",
          background: "#0f0f23",
        }}
      >
        {aboutMe}
      </SyntaxHighlighter>
    </div>
  );
}
