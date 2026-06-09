interface IRunnerControlsProps {
  nodeOptions: { value: string; label: string }[];
  startNodeId: string | null;
  algorithmName: string;
  canRunAlgorithm: boolean;
  onStartNodeChange: (value: string | null) => void;
  onRunAlgorithm: () => void;
}

export type { IRunnerControlsProps };
