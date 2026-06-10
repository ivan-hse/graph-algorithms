import {
  ActionIcon,
  Button,
  Group,
  Select,
  Stack,
  Tooltip,
} from "@mantine/core";
import {
  ArrowCounterClockwiseIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  PauseIcon,
  PlayIcon,
} from "@phosphor-icons/react";

import { dictionary } from "@/shared/static";

import { useAlgorithmRunner } from "../../AlgorithmRunnerProvider";
import type { IRunnerControlsProps } from "../types/IRunnerControlsProps.ts";

const RunnerControls = (props: IRunnerControlsProps) => {
  const {
    nodeOptions,
    startNodeId,
    algorithmName,
    canRunAlgorithm,
    onStartNodeChange,
    onRunAlgorithm,
  } = props;

  const { steps, currentStepIndex, isPlaying, dispatch } = useAlgorithmRunner();

  const hasSteps = steps.length > 0;

  const playLabel = isPlaying ? dictionary.pause : dictionary.play;

  return (
    <Stack gap="sm">
      <Select
        data={nodeOptions}
        value={startNodeId}
        disabled={!nodeOptions.length || isPlaying}
        label={dictionary.startNode}
        placeholder={dictionary.startNodePlaceholder}
        onChange={onStartNodeChange}
      />

      <Button disabled={!canRunAlgorithm || isPlaying} onClick={onRunAlgorithm}>
        {dictionary.runAlgorithm(algorithmName)}
      </Button>

      <Group gap="xs" justify="center">
        <Tooltip label={dictionary.stepBackward}>
          <ActionIcon
            size="lg"
            disabled={!hasSteps || isPlaying || currentStepIndex === 0}
            onClick={() => dispatch({ type: "STEP_BACKWARD" })}
          >
            <ArrowLeftIcon />
          </ActionIcon>
        </Tooltip>

        <Tooltip label={playLabel}>
          <ActionIcon
            size="lg"
            disabled={!hasSteps}
            onClick={() => dispatch({ type: isPlaying ? "PAUSE" : "PLAY" })}
          >
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </ActionIcon>
        </Tooltip>

        <Tooltip label={dictionary.stepForward}>
          <ActionIcon
            size="lg"
            disabled={
              !hasSteps || isPlaying || currentStepIndex === steps.length - 1
            }
            onClick={() => dispatch({ type: "STEP_FORWARD" })}
          >
            <ArrowRightIcon />
          </ActionIcon>
        </Tooltip>

        <Tooltip label={dictionary.reset}>
          <ActionIcon
            size="lg"
            disabled={!hasSteps || isPlaying}
            onClick={() => dispatch({ type: "RESET" })}
          >
            <ArrowCounterClockwiseIcon />
          </ActionIcon>
        </Tooltip>
      </Group>
    </Stack>
  );
};

export { RunnerControls };
