import { useContext } from "react";

import { dictionary } from "@/shared/static";
import type { TBaseObject } from "@/shared/types";

import type { IAlgorithmRunnerContextValue } from "../types/IAlgorithmRunnerContextValue.ts";
import { AlgorithmRunnerContext } from "./AlgorithmRunnerContext.ts";

const useAlgorithmRunner = <TAlgorithmState extends object = TBaseObject>() => {
  const value = useContext(AlgorithmRunnerContext);

  if (value === null) {
    throw new Error(dictionary.useAlgorithmRunnerError);
  }

  return value as IAlgorithmRunnerContextValue<TAlgorithmState>;
};

export { useAlgorithmRunner };
