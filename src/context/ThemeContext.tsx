"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
  theme: "",
  toggle: () => {},
});

const getFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
};

interface Props {
  children: any;
}

export const ThemeContextProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState(() => {
    return getFromLocalStorage() || "";
  });

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
