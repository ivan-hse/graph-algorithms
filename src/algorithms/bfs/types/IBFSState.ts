interface IBFSState {
  queueIds: string[];
  visitedIds: Set<string>;
  currentNodeId: string | null;
  edgeIds: string[];
}

export type { IBFSState };
