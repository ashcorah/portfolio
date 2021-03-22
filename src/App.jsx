import React, { Fragment } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Work from "./app/work/index.jsx";
import About from "./app/about/index.jsx";
import Gallery from "./app/gallery/index.jsx";
import Sidebar from "./components/Sidebar/index.jsx";
import { ChakraProvider, extendTheme, SimpleGrid } from "@chakra-ui/react";
import Fonts from "./components/Fonts/index.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import useMobile from "./hooks/useMobile";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});

const theme = extendTheme({
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

function App() {
  const isMobile = useMobile();
  return (
    <Fragment>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <Fonts />
          <Router>
            <SimpleGrid h="100%" gridTemplateColumns="auto">
              <aside>
                <Sidebar />
              </aside>
              <main>
                <Switch>
                  <Route path="/work" component={Work} />
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
