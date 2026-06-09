import type { IGraph } from "@/shared/types";

const findEdgeId = (
  graph: IGraph,
  sourceId: string,
  targetId: string,
): string | undefined => {
  const edge = graph.edges.find((edge) => {
    if (edge.source === sourceId && edge.target === targetId) {
      return true;
    }

    return (
      !graph.isDirected && edge.source === targetId && edge.target === sourceId
    );
  });

  return edge?.id;
};

export { findEdgeId };
