import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const ThemeContext =
  createContext();

export const ThemeProvider = ({
  children,
}) => {

  const [theme, setTheme] =
    useState(
      localStorage.getItem(
        "theme"
      ) || "dark"
    );

  useEffect(() => {

    localStorage.setItem(
      "theme",
      theme
    );

    if (
      theme === "light"
    ) {

      document.documentElement.classList.add(
        "light"
      );

    } else {

      document.documentElement.classList.remove(
        "light"
      );
    }

  }, [theme]);

  const toggleTheme =
    () => {

      setTheme(
        theme === "dark"
          ? "light"
          : "dark"
      );
    };

  return (

    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >

      {children}

    </ThemeContext.Provider>

  );
};

export const useTheme =
  () =>
    useContext(
      ThemeContext
    );