import type { IAlgorithmStep } from "../../types/IAlgorithmStep.ts";
import type { IBFSState } from "../types/IBFSState.ts";

const addBFSStep = (
  steps: IAlgorithmStep<IBFSState>[],
  newStep: Required<Omit<IAlgorithmStep<IBFSState>, "stepNumber">>,
) => {
  steps.push({
    stepNumber: steps.length + 1,
    description: newStep.description,
    state: structuredClone(newStep.state),
    pseudocodeLine: newStep.pseudocodeLine,
  });
};

export { addBFSStep };
