import { extendTheme } from "@chakra-ui/react";

const lightTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#F2F7F7",
        height: "100%",
      },
      html: {
        height: "100%",
      },
    },
  },
  colors: {
    palette: {
      select: "#151515",
      text: "white",
      base: "#0B2436",
      red: "#C9A3A4",
      white: "white",
      green: "#ACB5AC",
      orange: "#FF6B6B",
      black: "#2E2E2E",
      gold: "#D5B792",
      blue: "#A7CEEF",
      gray: "#858585",
      lightGray: "#BBBFBF",
      lighterGray: "#F2F7F7",
      lavendar: "#B8BBD3",
    },
  },
  fonts: {
    heading: "Source Sans Pro",
    body: "Source Sans Pro",
  },
});

const darkTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#404258",
        height: "100%",
      },
      html: {
        height: "100%",
      },
    },
  },
  colors: {
    palette: {
      select: "white",
      text: "white",
      base: "#DDDDDD",
      red: "#C9A3A4",
      gray: "white",
      green: "#ACB5AC",
      orange: "#FF6B6B",
      black: "#2E2E2E",
      gold: "#D5B792",
      blue: "#A7CEEF",
      white: "#858585",
      lightGray: "#D8D8D8",
      lighterGray: "#DDDDDD",
      lavendar: "#B8BBD3",
    },
  },
  fonts: {
    heading: "Source Sans Pro",
    body: "Source Sans Pro",
  },
});

const themes = {
  lightTheme,
  darkTheme,
};

export default themes;
