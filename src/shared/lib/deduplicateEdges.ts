import type { IGraphEdge } from "@/shared/types";

const deduplicateEdges = (edges: IGraphEdge[]): IGraphEdge[] => {
  const seenPairs = new Set<string>();
  const uniqueEdges: IGraphEdge[] = [];

  for (const edge of edges) {
    const pair = [edge.source, edge.target].sort().toString();

    if (seenPairs.has(pair)) continue;

    seenPairs.add(pair);
    uniqueEdges.push(edge);
  }

  return uniqueEdges;
};

export { deduplicateEdges };
