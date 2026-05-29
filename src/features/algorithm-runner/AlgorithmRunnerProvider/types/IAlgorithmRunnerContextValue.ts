import type { Dispatch } from "react";

import type { IAlgorithmRunnerState } from "./IAlgorithmRunnerState.ts";
import type { TAlgorithmRunnerAction } from "./TAlgorithmRunnerAction.ts";

interface IAlgorithmRunnerContextValue extends IAlgorithmRunnerState {
  dispatch: Dispatch<TAlgorithmRunnerAction>;
}

export type { IAlgorithmRunnerContextValue };
