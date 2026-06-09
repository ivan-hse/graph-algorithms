import type { IGraph } from "@/shared/types";

import type { IAlgorithmParams } from "./IAlgorithmParams.ts";
import type { IAlgorithmStep } from "./IAlgorithmStep.ts";

type TAlgorithmFn<TAlgorithmState extends object> = (
  graph: IGraph,
  params: IAlgorithmParams,
) => IAlgorithmStep<TAlgorithmState>[];

export type { TAlgorithmFn };
