import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./app/home/index.jsx";
import Work from "./app/work/index.jsx";
import Navbar from "./components/Navbar/index.jsx";
import { ChakraProvider, extendTheme, VStack } from "@chakra-ui/react";
import Particles from "react-particles-js";
import Fonts from "./components/Fonts/index.jsx";
import ParticlesOptions from "./particles.json";

const theme = extendTheme({
  colors: {
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
  },
  fonts: {
    heading: "Roboto Condensed",
    body: "Roboto Condensed",
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Particles
        params={ParticlesOptions}
        style={{ position: "absolute", zIndex: "-1" }}
      />
      <Fonts />
      <Router>
        <VStack spacing="24px">
          <header>
            <Navbar />
          </header>
          <main>
            <Switch>
              <Route path="/work" component={Work} />
              <Route path="/" component={Home} />
            </Switch>
          </main>
          <div />
        </VStack>
      </Router>
    </ChakraProvider>
  );
}

export default App;
