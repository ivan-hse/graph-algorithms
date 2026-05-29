import type { IGraph } from "@/shared/types";

import type { IAlgorithmParams } from "./IAlgorithmParams.ts";
import type { IAlgorithmStep } from "./IAlgorithmStep.ts";

type TAlgorithmFn = (
  graph: IGraph,
  params: IAlgorithmParams,
) => IAlgorithmStep[];

export type { TAlgorithmFn };
