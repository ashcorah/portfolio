import { createContext, useContext, useReducer } from "react";
import themes from "./themes";

const ThemeContext = createContext();

const useThemeContext = () => useContext(ThemeContext);

export const initializer = (initialValue = themes.lightTheme) =>
  themes[JSON.parse(localStorage.getItem("theme"))] || initialValue;

function reducer(state = themes.lightTheme, action) {
  localStorage.setItem("theme", JSON.stringify(action.type));
  return Object.keys(themes).includes(action.type)
    ? themes[action.type]
    : state;
}

const ThemeProvider = ({ children }) => {
  const ctx = useReducer(reducer, themes.lightTheme, initializer);
  return <ThemeContext.Provider value={ctx}>{children}</ThemeContext.Provider>;
};

const useThemeName = () => {
  return JSON.parse(localStorage.getItem("theme")) || Object.keys(themes)[0];
};

export { ThemeProvider, useThemeContext, useThemeName };
