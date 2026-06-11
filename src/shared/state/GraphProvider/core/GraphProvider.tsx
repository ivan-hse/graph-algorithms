import { useMemo, useReducer } from "react";

import type { IGraphProviderProps } from "../types/IGraphProviderProps.ts";
import { GraphContext } from "./GraphContext.ts";
import { graphReducer } from "./graphReducer.ts";

const GraphProvider = (props: IGraphProviderProps) => {
  const { children, initialGraph } = props;

  const [graph, dispatch] = useReducer(graphReducer, initialGraph);

  const value = useMemo(() => ({ graph, dispatch }), [graph]);

  return (
    <GraphContext.Provider value={value}>{children}</GraphContext.Provider>
  );
};

export { GraphProvider };
