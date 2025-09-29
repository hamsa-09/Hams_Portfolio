import React, { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("Theme") === "dark";
  });

  useEffect(() => {
    if (isDark) {
      localStorage.setItem("Theme", "dark");
      document.body.classList.add("dark");
    } else {
      localStorage.setItem("Theme", "light");
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev)=>!prev);
  };
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
export default ThemeContext;
