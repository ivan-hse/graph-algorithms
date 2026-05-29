import type { IGraphEdge } from "./IGraphEdge.ts";
import type { IGraphNode } from "./IGraphNode.ts";

interface IGraph {
  nodes: IGraphNode[];
  edges: IGraphEdge[];
  isDirected: boolean;
}

export type { IGraph };
