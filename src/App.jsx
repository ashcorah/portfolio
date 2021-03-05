import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./app/home/index.jsx";
import Work from "./app/work/index.jsx";
import Navbar from "./components/Navbar/index.jsx";
import {
  ChakraProvider,
  extendTheme,
  Flex,
  useMediaQuery,
} from "@chakra-ui/react";
import Fonts from "./components/Fonts/index.jsx";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "white",
        height: "100%",
      },
      html: {
        height: "100%",
      },
    },
  },
  colors: {
    palette: {
      white: "white",
      grey: "#556270",
      blue: "#4ECDC4",
      green: "#C7F464",
      orange: "#FF6B6B",
      red: "#C44D58",
    },
  },
  fonts: {
    heading: "Overpass",
    body: "Overpass",
  },
});

function App() {
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Router>
        <Flex h="100%">
          <Navbar />
          <Switch>
            <Route path="/work" component={Work} />
            <Route path="/" component={Home} />
          </Switch>
        </Flex>
      </Router>
    </ChakraProvider>
  );
}

export default App;
