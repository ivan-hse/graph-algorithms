import type { ReactNode } from "react";

import type { IGraph } from "@/shared/types";

interface IGraphProviderProps {
  children: ReactNode;
  initialGraph: IGraph;
}

export type { IGraphProviderProps };
