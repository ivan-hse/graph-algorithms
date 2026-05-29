import { INITIAL_STATE } from "../static/INITIAL_STATE.ts";
import type { IAlgorithmRunnerState } from "../types/IAlgorithmRunnerState.ts";
import type { TAlgorithmRunnerAction } from "../types/TAlgorithmRunnerAction.ts";

const algorithmRunnerReducer = (
  state: IAlgorithmRunnerState,
  action: TAlgorithmRunnerAction,
): IAlgorithmRunnerState => {
  switch (action.type) {
    case "LOAD_STEPS":
      return {
        ...state,
        steps: action.steps,
        currentStepIndex: action.steps.length > 0 ? 0 : -1,
        isPlaying: false,
      };

    case "STEP_FORWARD": {
      const next = state.currentStepIndex + 1;

      if (next === state.steps.length) {
        return { ...state, isPlaying: false };
      }

      return { ...state, currentStepIndex: next };
    }

    case "STEP_BACKWARD": {
      const prev = state.currentStepIndex - 1;

      if (prev < 0) return state;

      return { ...state, currentStepIndex: prev, isPlaying: false };
    }

    case "PLAY":
      if (state.steps.length === 0) return state;

      if (state.currentStepIndex === state.steps.length - 1) {
        return { ...state, currentStepIndex: 0, isPlaying: true };
      }

      return { ...state, isPlaying: true };

    case "PAUSE":
      return { ...state, isPlaying: false };

    case "RESET":
      return INITIAL_STATE;
  }
};

export { algorithmRunnerReducer };
