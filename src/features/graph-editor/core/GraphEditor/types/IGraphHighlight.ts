interface IGraphHighlight {
  startNodeId: string | null;
  currentNodeId: string | null;
  queueIds: string[];
  visitedIds: string[];
  edgeIds: string[];
}

export type { IGraphHighlight };
