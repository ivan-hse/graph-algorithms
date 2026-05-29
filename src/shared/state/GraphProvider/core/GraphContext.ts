import { createContext } from "react";

import type { IGraphContextValue } from "../types/IGraphContextValue.ts";

const GraphContext = createContext<IGraphContextValue | null>(null);

export { GraphContext };
