import { Badge, Group, Stack, Text, Title } from "@mantine/core";

import { toStringArray } from "@/shared/lib";
import { dictionary } from "@/shared/static";

import { useAlgorithmRunner } from "../../AlgorithmRunnerProvider";
import type { IQueueViewProps } from "../types/IQueueViewProps.ts";

const QueueView = (props: IQueueViewProps) => {
  const { nodeLabels } = props;

  const { steps, currentStepIndex } = useAlgorithmRunner();

  const step = currentStepIndex !== -1 ? steps[currentStepIndex] : null;

  const queueIds = step ? toStringArray(step.state.queueIds) : [];

  return (
    <Stack gap="xs">
      <Title order={4}>{dictionary.queue}</Title>

      {queueIds.length ? (
        <Group gap="xs">
          {queueIds.map((id) => (
            <Badge key={id} size="lg">
              {nodeLabels[id]}
            </Badge>
          ))}
        </Group>
      ) : (
        <Text size="sm" c="dimmed">
          {dictionary.queueIsEmpty}
        </Text>
      )}
    </Stack>
  );
};

export { QueueView };
