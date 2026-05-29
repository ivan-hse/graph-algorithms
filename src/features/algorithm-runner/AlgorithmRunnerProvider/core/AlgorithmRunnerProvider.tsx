import { useEffect, useMemo, useReducer } from "react";

import { INITIAL_STATE } from "../static/INITIAL_STATE.ts";
import { STEP_DELAY_MS } from "../static/STEP_DELAY_MS.ts";
import type { IAlgorithmRunnerProviderProps } from "../types/IAlgorithmRunnerProviderProps.ts";
import { AlgorithmRunnerContext } from "./AlgorithmRunnerContext.ts";
import { algorithmRunnerReducer } from "./algorithmRunnerReducer.ts";

const AlgorithmRunnerProvider = (props: IAlgorithmRunnerProviderProps) => {
  const { children } = props;

  const [state, dispatch] = useReducer(algorithmRunnerReducer, INITIAL_STATE);

  useEffect(() => {
    if (!state.isPlaying) return;

    const timeoutId = setTimeout(
      () => dispatch({ type: "STEP_FORWARD" }),
      STEP_DELAY_MS,
    );

    return () => clearTimeout(timeoutId);
  }, [state.isPlaying, state.currentStepIndex]);

  const value = useMemo(() => {
    return { ...state, dispatch };
  }, [state]);

  return (
    <AlgorithmRunnerContext.Provider value={value}>
      {children}
    </AlgorithmRunnerContext.Provider>
  );
};

export { AlgorithmRunnerProvider };
