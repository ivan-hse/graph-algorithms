import type { IAlgorithmStep } from "@/algorithms/types";

type TAlgorithmRunnerAction =
  | { type: "LOAD_STEPS"; steps: IAlgorithmStep[] }
  | { type: "STEP_FORWARD" }
  | { type: "STEP_BACKWARD" }
  | { type: "PLAY" }
  | { type: "PAUSE" }
  | { type: "RESET" };

export type { TAlgorithmRunnerAction };
