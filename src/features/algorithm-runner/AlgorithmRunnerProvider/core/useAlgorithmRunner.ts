import { useContext } from "react";

import { dictionary } from "@/shared/static";

import { AlgorithmRunnerContext } from "./AlgorithmRunnerContext.ts";

const useAlgorithmRunner = () => {
  const value = useContext(AlgorithmRunnerContext);

  if (value === null) {
    throw new Error(dictionary.useAlgorithmRunnerError);
  }

  return value;
};

export { useAlgorithmRunner };
