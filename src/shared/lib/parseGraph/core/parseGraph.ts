import { dictionary } from "@/shared/static";
import type { IGraph } from "@/shared/types";

import { graphSchema } from "../static/graphSchema.ts";

const parseGraph = (data: unknown): IGraph => {
  const parsed = graphSchema.parse(data);

  const nodeIds = new Set(parsed.nodes.map((node) => node.id));

  return {
    nodes: parsed.nodes.map((node) => ({
      id: node.id,
      label: node.label,
      x: node.x,
      y: node.y,
    })),
    edges: parsed.edges.map((edge) => {
      if (!nodeIds.has(edge.source) || !nodeIds.has(edge.target)) {
        throw new Error(dictionary.parseGraphError);
      }

      return {
        id: edge.id,
        source: edge.source,
        target: edge.target,
        ...(edge.weight !== undefined && { weight: edge.weight }),
      };
    }),
    isDirected: parsed.isDirected,
  };
};

export { parseGraph };
