import type { Dispatch } from "react";

import type { IGraph } from "@/shared/types";

import type { TGraphAction } from "./TGraphAction.ts";

interface IGraphContextValue {
  graph: IGraph;
  dispatch: Dispatch<TGraphAction>;
}

export type { IGraphContextValue };
