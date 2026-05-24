import React from "react";

import {
  FaMoon,
  FaSun,
} from "react-icons/fa";

import {
  useTheme,
} from "../context/ThemeContext";

const ThemeToggle = () => {

  const {
    theme,
    toggleTheme,
  } = useTheme();

  return (

    <button
      onClick={toggleTheme}
      className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center hover:scale-105 transition"
    >

      {theme === "dark"
        ? <FaSun />
        : <FaMoon />}

    </button>
  );
};

export default ThemeToggle;