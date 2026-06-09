import { buildAdjacencyList, findEdgeId } from "@/shared/lib";
import { dictionary } from "@/shared/static";

import type { IAlgorithmStep } from "../../types/IAlgorithmStep.ts";
import type { TAlgorithmFn } from "../../types/TAlgorithmFn.ts";
import { addBFSStep } from "../lib/addBFSStep.ts";
import { BFS_LINES_MAP } from "../static/BFS_LINES_MAP.ts";
import type { IBFSState } from "../types/IBFSState.ts";

const bfs: TAlgorithmFn<IBFSState> = (graph, params) => {
  const { startNodeId } = params;

  const steps: IAlgorithmStep<IBFSState>[] = [];

  const startNode = graph.nodes.find((node) => node.id === startNodeId);
  if (!startNodeId || !startNode) return steps;

  const nodeLabels = new Map<string, string>();

  for (const node of graph.nodes) {
    nodeLabels.set(node.id, node.label);
  }

  const adjacencyList = buildAdjacencyList(graph);

  const queueIds: string[] = [startNodeId];
  const visitedIds = new Set<string>([startNodeId]);

  addBFSStep(steps, {
    description: dictionary.bfsInit(startNode.label),
    state: {
      queueIds,
      visitedIds,
      currentNodeId: null,
      edgeIds: [],
    },
    pseudocodeLine: BFS_LINES_MAP.INIT,
  });

  while (queueIds.length) {
    const currentNodeId = queueIds.shift();
    if (!currentNodeId) break;

    const currentNodeLabel = nodeLabels.get(currentNodeId) ?? currentNodeId;

    addBFSStep(steps, {
      description: dictionary.bfsDequeue(currentNodeLabel),
      state: {
        queueIds,
        visitedIds,
        currentNodeId,
        edgeIds: [],
      },
      pseudocodeLine: BFS_LINES_MAP.DEQUEUE,
    });

    const neighborIds = adjacencyList.get(currentNodeId) ?? [];

    for (const neighborId of neighborIds) {
      const neighborLabel = nodeLabels.get(neighborId) ?? neighborId;

      const edgeId = findEdgeId(graph, currentNodeId, neighborId);
      const edgeIds = edgeId ? [edgeId] : [];

      if (visitedIds.has(neighborId)) {
        addBFSStep(steps, {
          description: dictionary.bfsCheckVisited(
            neighborLabel,
            currentNodeLabel,
          ),
          state: {
            queueIds,
            visitedIds,
            currentNodeId,
            edgeIds,
          },
          pseudocodeLine: BFS_LINES_MAP.CHECK_VISITED,
        });

        continue;
      }

      queueIds.push(neighborId);
      visitedIds.add(neighborId);

      addBFSStep(steps, {
        description: dictionary.bfsEnqueue(neighborLabel, currentNodeLabel),
        state: {
          queueIds,
          visitedIds,
          currentNodeId,
          edgeIds,
        },
        pseudocodeLine: BFS_LINES_MAP.ENQUEUE,
      });
    }

    if (!neighborIds.length) {
      addBFSStep(steps, {
        description: dictionary.bfsNoNeighbors(currentNodeLabel),
        state: {
          queueIds,
          visitedIds,
          currentNodeId,
          edgeIds: [],
        },
        pseudocodeLine: BFS_LINES_MAP.NO_NEIGHBORS,
      });
    }
  }

  addBFSStep(steps, {
    description: dictionary.bfsDone(visitedIds.size, graph.nodes.length),
    state: {
      queueIds,
      visitedIds,
      currentNodeId: null,
      edgeIds: [],
    },
    pseudocodeLine: BFS_LINES_MAP.DONE,
  });

  return steps;
};

export { bfs };
