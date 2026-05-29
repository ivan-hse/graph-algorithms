interface IAlgorithmStep {
  stepNumber: number;
  description: string;
  highlightedNodes: string[];
  highlightedEdges: string[];
  state: Record<string, unknown>;

  pseudocodeLine?: number;
}

export type { IAlgorithmStep };
