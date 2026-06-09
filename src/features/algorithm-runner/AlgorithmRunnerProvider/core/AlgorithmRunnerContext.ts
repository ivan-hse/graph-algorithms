import { createContext } from "react";

import type { TBaseObject } from "@/shared/types";

import type { IAlgorithmRunnerContextValue } from "../types/IAlgorithmRunnerContextValue.ts";

const AlgorithmRunnerContext =
  createContext<IAlgorithmRunnerContextValue<TBaseObject> | null>(null);

export { AlgorithmRunnerContext };
