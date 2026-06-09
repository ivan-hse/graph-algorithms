import type { IAlgorithmStep } from "@/algorithms/types";

type TAlgorithmRunnerAction<TAlgorithmState extends object> =
  | { type: "LOAD_STEPS"; steps: IAlgorithmStep<TAlgorithmState>[] }
  | { type: "STEP_FORWARD" }
  | { type: "STEP_BACKWARD" }
  | { type: "PLAY" }
  | { type: "PAUSE" }
  | { type: "RESET" };

export type { TAlgorithmRunnerAction };
