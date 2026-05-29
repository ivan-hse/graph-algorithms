interface IGraphEdge {
  id: string;
  source: string;
  target: string;

  weight?: number;
}

export type { IGraphEdge };
