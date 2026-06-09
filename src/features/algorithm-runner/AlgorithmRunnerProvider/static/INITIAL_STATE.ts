import type { TBaseObject } from "@/shared/types";

import type { IAlgorithmRunnerState } from "../types/IAlgorithmRunnerState.ts";

const INITIAL_STATE: IAlgorithmRunnerState<TBaseObject> = {
  steps: [],
  currentStepIndex: -1,
  isPlaying: false,
} as const;

export { INITIAL_STATE };
