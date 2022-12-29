import { extendTheme } from "@chakra-ui/react";
import Swhirly from "../../assets/images/puter.gif";
import Vapor from "../../assets/images/vapor.gif";

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
  images: {
    aboutImg: Swhirly,
  },
  colors: {
    palette: {
      select: "#151515",
      text: "#171010",
      textHover: "#858585",
      selected: "#858585",
      card: "#0B2436",
      iconHover: "#858585",
      icon: "#161616",
      loader: "#0B2436",
      border: "#858585",
      cardText: "#DDDDDD",
      galleryText: "#F2F7F7",
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
        bg: "#000000",
        height: "100%",
      },
      html: {
        height: "100%",
      },
    },
  },
  images: {
    aboutImg: Vapor,
  },
  colors: {
    palette: {
      select: "#D6D5A8",
      text: "#D6D5A8",
      textHover: "#816797",
      selected: "#51557E",
      card: "#DDDDDD",
      iconHover: "#858585",
      icon: "#D6D5A8",
      border: "#D6D5A8",
      loader: "#D6D5A8",
      cardText: "#D6D5A8",
      galleryText: "#D6D5A8",
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
