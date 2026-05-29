import { createContext } from "react";

import type { IAlgorithmRunnerContextValue } from "../types/IAlgorithmRunnerContextValue.ts";

const AlgorithmRunnerContext =
  createContext<IAlgorithmRunnerContextValue | null>(null);

export { AlgorithmRunnerContext };
