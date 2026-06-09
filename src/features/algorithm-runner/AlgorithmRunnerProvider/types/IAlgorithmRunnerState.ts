import type { IAlgorithmStep } from "@/algorithms/types";

interface IAlgorithmRunnerState<TAlgorithmState extends object> {
  steps: IAlgorithmStep<TAlgorithmState>[];
  currentStepIndex: number;
  isPlaying: boolean;
}

export type { IAlgorithmRunnerState };
