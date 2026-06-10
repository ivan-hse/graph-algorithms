import { deduplicateEdges } from "@/shared/lib";
import type { IGraph } from "@/shared/types";

import { INITIAL_GRAPH } from "../static/INITIAL_GRAPH.ts";
import type { TGraphAction } from "../types/TGraphAction.ts";

const graphReducer = (state: IGraph, action: TGraphAction): IGraph => {
  switch (action.type) {
    case "LOAD_GRAPH":
      return action.graph;

    case "ADD_NODE":
      return { ...state, nodes: [...state.nodes, action.node] };

    case "UPDATE_NODE":
      return {
        ...state,
        nodes: state.nodes.map((node) => {
          return node.id === action.id ? { ...node, ...action.patch } : node;
        }),
      };

    case "REMOVE_NODE":
      return {
        ...state,
        nodes: state.nodes.filter((node) => node.id !== action.id),
        edges: state.edges.filter(
          (edge) => edge.source !== action.id && edge.target !== action.id,
        ),
      };

    case "ADD_EDGE":
      return { ...state, edges: [...state.edges, action.edge] };

    case "UPDATE_EDGE":
      return {
        ...state,
        edges: state.edges.map((edge) => {
          return edge.id === action.id ? { ...edge, ...action.patch } : edge;
        }),
      };

    case "REMOVE_EDGE":
      return {
        ...state,
        edges: state.edges.filter((edge) => edge.id !== action.id),
      };

    case "TOGGLE_DIRECTED":
      return {
        ...state,
        isDirected: action.isDirected,
        ...(!action.isDirected && { edges: deduplicateEdges(state.edges) }),
      };

    case "CLEAR_GRAPH":
      return INITIAL_GRAPH;
  }
};

export { graphReducer };
