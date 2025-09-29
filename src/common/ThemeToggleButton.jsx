import React, { useEffect } from "react";
import { useModeAnimation } from "react-theme-switch-animation";
import { Sun, Moon } from "lucide-react";

const ThemeToggleButton = () => {
  const { ref, toggleSwitchTheme, isDarkMode } = useModeAnimation();

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <button
      ref={ref}
      onClick={toggleSwitchTheme}
      className="cursor-pointer"
      aria-label="Toggle theme"
    >
      {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggleButton;
