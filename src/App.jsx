import React, { Fragment } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Work from "./app/work/index.jsx";
import About from "./app/about/index.jsx";
import Gallery from "./app/gallery/index.jsx";
import Sidebar from "./components/Sidebar/index.jsx";
import { ChakraProvider, SimpleGrid } from "@chakra-ui/react";
import Fonts from "./components/Fonts/index.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import useMobile from "./hooks/useMobile";
import { useThemeContext } from "./components/ThemeSelector/themeContext.js";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});

function App() {
  const isMobile = useMobile();
  const [theme] = useThemeContext();

  return (
    <Fragment>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <Fonts />
          <Router>
            <SimpleGrid
              h="100%"
              gridTemplateColumns={
                isMobile
                  ? "auto"
                  : "250px repeat(auto-fit, minmax(250px, auto))"
              }
            >
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
