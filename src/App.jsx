import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./app/home/index.jsx";
import Work from "./app/work/index.jsx";
import Navbar from "./components/Navbar/index.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Fonts from "./components/Fonts/index.jsx";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#C8C8A9",
      },
    },
  },
  colors: {
    palette: {
      berry: "#FE4365",
      sex: "#FC9D9A",
      urine: "#F9CDAD",
      apple: "#C8C8A9",
      centipede: "#83AF9B",
      active: "#1A202C",
      inActive: "#6d6d6d",
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
      <Fonts />
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
        <div />
      </Router>
    </ChakraProvider>
  );
}

export default App;
