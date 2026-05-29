import type { IAlgorithmRunnerState } from "../types/IAlgorithmRunnerState.ts";

const INITIAL_STATE: IAlgorithmRunnerState = {
  steps: [],
  currentStepIndex: -1,
  isPlaying: false,
} as const;

export { INITIAL_STATE };
