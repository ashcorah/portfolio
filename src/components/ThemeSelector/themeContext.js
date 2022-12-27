import { createContext, useContext, useReducer } from "react";
import themes from "./themes";

const ThemeContext = createContext();

const useThemeContext = () => useContext(ThemeContext);

export const initializer = (initialValue = themes.lightTheme) =>
  themes[JSON.parse(localStorage.getItem("theme"))] || initialValue;

function reducer(state = themes.lightTheme, action) {
  localStorage.setItem("theme", JSON.stringify(action.type));

  switch (action.type) {
    case "lightTheme":
      return themes.lightTheme;
    case "darkTheme":
      return themes.darkTheme;
    default:
      return state;
  }
}

const ThemeProvider = ({ children }) => {
  const ctx = useReducer(reducer, [], initializer);
  return <ThemeContext.Provider value={ctx}>{children}</ThemeContext.Provider>;
};

const useThemeName = () => {
  return JSON.parse(localStorage.getItem("theme")) || "lightTheme";
};

export { ThemeProvider, useThemeContext, useThemeName };
