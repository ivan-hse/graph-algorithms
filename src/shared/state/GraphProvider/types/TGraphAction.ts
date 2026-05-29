import type { IGraph, IGraphEdge, IGraphNode } from "@/shared/types";

type TGraphAction =
  | { type: "LOAD_GRAPH"; graph: IGraph }
  | { type: "ADD_NODE"; node: IGraphNode }
  | { type: "UPDATE_NODE"; id: string; patch: Partial<IGraphNode> }
  | { type: "REMOVE_NODE"; id: string }
  | { type: "ADD_EDGE"; edge: IGraphEdge }
  | { type: "UPDATE_EDGE"; id: string; patch: Partial<IGraphEdge> }
  | { type: "REMOVE_EDGE"; id: string }
  | { type: "TOGGLE_DIRECTED"; isDirected: boolean }
  | { type: "CLEAR_GRAPH" };

export type { TGraphAction };
