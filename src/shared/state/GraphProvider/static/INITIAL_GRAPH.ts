import type { IGraph } from "@/shared/types";

const INITIAL_GRAPH: IGraph = {
  nodes: [],
  edges: [],
  isDirected: false,
} as const;

export { INITIAL_GRAPH };
