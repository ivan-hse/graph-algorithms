import { useCallback, useEffect, useMemo, useState } from "react";

import { Group, Stack, Text } from "@mantine/core";

import { bfs, BFS_PSEUDOCODE, type IBFSState } from "@/algorithms/bfs";
import {
  PseudocodeView,
  QueueView,
  RunnerControls,
  StepDescription,
  useAlgorithmRunner,
} from "@/features/algorithm-runner";
import { GraphEditor, type IGraphHighlight } from "@/features/graph-editor";
import { GraphIOControls } from "@/features/graph-io";
import { ClearGraphButton } from "@/features/graph-storage";
import { AlgorithmPageLayout } from "@/shared/layouts/AlgorithmPageLayout";
import { useGraph } from "@/shared/state/GraphProvider";
import { dictionary } from "@/shared/static";

const BFSPageContent = () => {
  const { graph } = useGraph();

  const { steps, currentStepIndex, isPlaying, dispatch } =
    useAlgorithmRunner<IBFSState>();

  const [selectedStartNodeId, setSelectedStartNodeId] = useState<string | null>(
    null,
  );

  const startNodeId = graph.nodes.some(
    (node) => node.id === selectedStartNodeId,
  )
    ? selectedStartNodeId
    : (graph.nodes[0]?.id ?? null);

  const graphStructureKey = `${graph.nodes.length}:${graph.edges.length}:${graph.isDirected}`;

  useEffect(() => {
    dispatch({ type: "RESET" });
  }, [dispatch, graphStructureKey]);

  const nodeOptions = useMemo(() => {
    return graph.nodes.map((node) => ({ value: node.id, label: node.label }));
  }, [graph.nodes]);

  const nodeLabels = useMemo(() => {
    const labels: Record<string, string> = {};

    for (const node of graph.nodes) {
      labels[node.id] = node.label;
    }

    return labels;
  }, [graph.nodes]);

  const handleRunAlgorithm = useCallback(() => {
    if (!startNodeId) return;

    dispatch({ type: "LOAD_STEPS", steps: bfs(graph, { startNodeId }) });
  }, [graph, dispatch, startNodeId]);

  const highlight = useMemo<IGraphHighlight>(() => {
    const step = currentStepIndex !== -1 ? steps[currentStepIndex] : null;

    if (!step) {
      return {
        startNodeId,
        currentNodeId: null,
        queueIds: [],
        visitedIds: [],
        edgeIds: [],
      };
    }

    return {
      startNodeId,
      currentNodeId: step.state.currentNodeId,
      queueIds: step.state.queueIds,
      visitedIds: [...step.state.visitedIds],
      edgeIds: step.state.edgeIds,
    };
  }, [steps, currentStepIndex, startNodeId]);

  const canRunAlgorithm = !!graph.nodes.length && !!startNodeId;

  const asideContent = (
    <Stack p="md" gap="lg">
      {!graph.nodes.length && (
        <Text size="sm" c="dimmed">
          {dictionary.emptyGraphHint}
        </Text>
      )}

      <RunnerControls
        nodeOptions={nodeOptions}
        startNodeId={startNodeId}
        algorithmName={dictionary.bfs}
        canRunAlgorithm={canRunAlgorithm}
        onStartNodeChange={setSelectedStartNodeId}
        onRunAlgorithm={handleRunAlgorithm}
      />

      <StepDescription algorithmName={dictionary.bfs} />

      <PseudocodeView lines={BFS_PSEUDOCODE} />

      <QueueView nodeLabels={nodeLabels} />
    </Stack>
  );

  return (
    <AlgorithmPageLayout asideContent={asideContent}>
      <GraphEditor
        highlight={highlight}
        isReadonly={isPlaying}
        toolbar={
          <Group gap="lg">
            <GraphIOControls isDisabled={isPlaying} />

            <ClearGraphButton isDisabled={isPlaying} />
          </Group>
        }
      />
    </AlgorithmPageLayout>
  );
};

export { BFSPageContent };
