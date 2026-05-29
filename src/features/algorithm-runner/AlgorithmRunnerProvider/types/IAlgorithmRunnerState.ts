import type { IAlgorithmStep } from "@/algorithms/types";

interface IAlgorithmRunnerState {
  steps: IAlgorithmStep[];
  currentStepIndex: number;
  isPlaying: boolean;
}

export type { IAlgorithmRunnerState };
