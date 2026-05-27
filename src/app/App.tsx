import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { Router, Route, Switch } from "wouter";

import { BellmanFordPage } from "@/pages/BellmanFordPage";
import { BFSPage } from "@/pages/BFSPage";
import { DFSPage } from "@/pages/DFSPage";
import { DijkstraPage } from "@/pages/DijkstraPage";
import { KruskalPage } from "@/pages/KruskalPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { PrimPage } from "@/pages/PrimPage";
import { StartPage } from "@/pages/StartPage";
import { ROUTES } from "@/shared/static";

import { theme } from "./theme.ts";

const base = import.meta.env.BASE_URL.replace(/\/$/, "");

const App = () => {
  return (
    <MantineProvider forceColorScheme="dark" theme={theme}>
      <Router base={base}>
        <Switch>
          <Route path={ROUTES.START} component={StartPage} />
          <Route path={ROUTES.BFS} component={BFSPage} />
          <Route path={ROUTES.DFS} component={DFSPage} />
          <Route path={ROUTES.DIJKSTRA} component={DijkstraPage} />
          <Route path={ROUTES.BELLMAN_FORD} component={BellmanFordPage} />
          <Route path={ROUTES.PRIM} component={PrimPage} />
          <Route path={ROUTES.KRUSKAL} component={KruskalPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Router>
    </MantineProvider>
  );
};

export default App;
