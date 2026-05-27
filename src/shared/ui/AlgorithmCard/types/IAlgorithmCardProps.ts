interface IAlgorithmCardProps {
  algorithmType: "traversal" | "shortest-path" | "mst";
  title: string;
  text: string;
  onClick: () => void;
}

export type { IAlgorithmCardProps };
