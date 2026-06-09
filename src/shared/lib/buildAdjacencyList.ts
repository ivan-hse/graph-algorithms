import type { IGraph } from "@/shared/types";

const buildAdjacencyList = (graph: IGraph): Map<string, string[]> => {
  const adjacencyList = new Map<string, string[]>();

  for (const node of graph.nodes) {
    adjacencyList.set(node.id, []);
  }

  for (const edge of graph.edges) {
    adjacencyList.get(edge.source)?.push(edge.target);

    if (!graph.isDirected) {
      adjacencyList.get(edge.target)?.push(edge.source);
    }
  }

  const traversalOrder = new Map<string, number>();

  graph.nodes.forEach((node, index) => traversalOrder.set(node.id, index));

  for (const neighbors of adjacencyList.values()) {
    neighbors.sort((first, second) => {
      return (
        (traversalOrder.get(first) ?? 0) - (traversalOrder.get(second) ?? 0)
      );
    });
  }

  return adjacencyList;
};

export { buildAdjacencyList };
