import { Stack, Text } from "@mantine/core";

import { dictionary } from "@/shared/static";

import { useAlgorithmRunner } from "../../AlgorithmRunnerProvider";
import type { IStepDescriptionProps } from "../types/IStepDescriptionProps.ts";

const StepDescription = (props: IStepDescriptionProps) => {
  const { algorithmName } = props;

  const { steps, currentStepIndex } = useAlgorithmRunner();

  const step = currentStepIndex !== -1 ? steps[currentStepIndex] : null;

  return step ? (
    <Stack gap="xs">
      <Text size="xs" c="dimmed">
        {dictionary.stepCounter(step.stepNumber, steps.length)}
      </Text>

      <Text size="sm">{step.description}</Text>
    </Stack>
  ) : (
    <Text size="sm" c="dimmed">
      {dictionary.pressRunHint(algorithmName)}
    </Text>
  );
};

export { StepDescription };
