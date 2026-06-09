import type { Dispatch } from "react";

import type { IAlgorithmRunnerState } from "./IAlgorithmRunnerState.ts";
import type { TAlgorithmRunnerAction } from "./TAlgorithmRunnerAction.ts";

interface IAlgorithmRunnerContextValue<
  TAlgorithmState extends object,
> extends IAlgorithmRunnerState<TAlgorithmState> {
  dispatch: Dispatch<TAlgorithmRunnerAction<TAlgorithmState>>;
}

export type { IAlgorithmRunnerContextValue };
