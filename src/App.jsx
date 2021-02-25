import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./app/home/index.jsx";
import Work from "./app/work/index.jsx";
import Navbar from "./components/Navbar/index.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import "./App.css";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <header>
          <Navbar />
        </header>
        <main>
          <Switch>
            <Route path="/work" component={Work} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
      </Router>
    </ChakraProvider>
  );
}

export default App;
