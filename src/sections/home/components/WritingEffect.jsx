import React from "react";
import { Typewriter } from "react-simple-typewriter";

function TypingEffect() {
  return (
    <h2 className="text-3xl font-bold">
      I' m a {" "}
      <span style={{ color: "purple" }}>
        <Typewriter
          words={[
            " Frontend Developer",
            " Backend Developer",
            " Fullstack Developer",
          ]}
          loop={0} // 0 = infinite
          cursor
          cursorStyle="|"
          typeSpeed={150}
          deleteSpeed={200}
          delaySpeed={1500}
        />
      </span>
    </h2>
  );
}

export default TypingEffect;
