import { useMemo, useReducer } from "react";

import { INITIAL_GRAPH } from "../static/INITIAL_GRAPH.ts";
import type { IGraphProviderProps } from "../types/IGraphProviderProps.ts";
import { GraphContext } from "./GraphContext.ts";
import { graphReducer } from "./graphReducer.ts";

const GraphProvider = (props: IGraphProviderProps) => {
  const { children } = props;

  const [graph, dispatch] = useReducer(graphReducer, INITIAL_GRAPH);

  const value = useMemo(() => {
    return { graph, dispatch };
  }, [graph]);

  return (
    <GraphContext.Provider value={value}>{children}</GraphContext.Provider>
  );
};

export { GraphProvider };
