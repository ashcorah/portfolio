import React, { Fragment } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Work from "./app/work/index.jsx";
import About from "./app/about/index.jsx";
import Gallery from "./app/gallery/index.jsx";
import Sidebar from "./components/Sidebar/index.jsx";
import { ChakraProvider, extendTheme, SimpleGrid } from "@chakra-ui/react";
import Fonts from "./components/Fonts/index.jsx";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  refetchOnWindowFocus: false,
  refetchOnMount: false,
});

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#eaeaea",
        height: "100%",
      },
      html: {
        height: "100%",
      },
    },
  },
  colors: {
    palette: {
      youtube: "#c4302b",
      white: "white",
      blue: "#4ECDC4",
      green: "#C7F464",
      orange: "#FF6B6B",
      red: "#C44D58",
      greys: {
        default: "rgba(70,78,84,.88)",
        mid: "rgb(110, 118, 127)",
        light: "#F2F2F2",
        neutral: "#E3E3E3",
        shade: "#D4D4D4",
        dark: "#C5C5C5",
        jet: "#B6B6B6",
      },
    },
  },
  fonts: {
    heading: "Open Sans",
    body: "Open Sans",
  },
});

function App() {
  return (
    <Fragment>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <Fonts />
          <Router>
            <SimpleGrid h="100%" gridTemplateColumns="250px auto">
              <aside>
                <Sidebar />
              </aside>
              <main>
                <Switch>
                  <Route exact path="/work" component={Work} />
                  <Route exact path="/gallery" component={Gallery} />
                  <Route path="/" component={About} />
                </Switch>
              </main>
            </SimpleGrid>
          </Router>
        </ChakraProvider>
      </QueryClientProvider>
    </Fragment>
  );
}

export default App;
