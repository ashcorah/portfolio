import { extendTheme } from "@chakra-ui/react";
import Swhirly from "../../assets/images/puter.gif";
import Vapor from "../../assets/images/vapor.gif";
import Sky from "../../assets/images/sky.gif";
import Ash from "../../assets/images/ash.jpg";
import Ash2 from "../../assets/images/ash2.jpg";
import Ash3 from "../../assets/images/Ash3.jpg";

const lightTheme = extendTheme({
  name: "Light",
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
    profilePic: Ash,
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
  name: "Dark",
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
    profilePic: Ash3,
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

const pastelleTheme = extendTheme({
  name: "Pastelle",
  styles: {
    global: {
      body: {
        bg: "#C0DEFF",
        height: "100%",
      },
      html: {
        height: "100%",
      },
    },
  },
  images: {
    aboutImg: Sky,
    profilePic: Ash2,
  },
  colors: {
    palette: {
      select: "#FD8A8A",
      text: "#FFF8E1",
      textHover: "#9EA1D4",
      selected: "#A8D1D1",
      card: "#A8D1D1",
      iconHover: "#9EA1D4",
      icon: "#FD8A8A",
      border: "#FD8A8A",
      loader: "#F1F7B5",
      cardText: "#F1F7B5",
      galleryText: "#F1F7B5",
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
  pastelleTheme,
};

export default themes;
