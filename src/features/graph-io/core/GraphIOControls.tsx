import { useRef } from "react";

import { ActionIcon, FileButton, Group, Tooltip } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { DownloadSimpleIcon, UploadSimpleIcon } from "@phosphor-icons/react";

import { parseGraph } from "@/shared/lib";
import { useGraph } from "@/shared/state/GraphProvider";
import { dictionary } from "@/shared/static";

import { downloadGraphJson } from "../lib/downloadGraphJson.ts";
import type { IGraphIOControlsProps } from "../types/IGraphIOControlsProps.ts";

const GraphIOControls = (props: IGraphIOControlsProps) => {
  const { isDisabled } = props;

  const { graph, dispatch } = useGraph();

  const resetRef = useRef<() => void>(null);

  const handleImport = async (file: File | null) => {
    resetRef.current?.();

    if (!file) return;

    try {
      const importedGraph = parseGraph(JSON.parse(await file.text()));

      dispatch({ type: "LOAD_GRAPH", graph: importedGraph });

      notifications.show({
        color: "green",
        title: dictionary.importSuccessTitle,
        message: dictionary.importSuccessMessage,
      });
    } catch (error) {
      console.error(error);

      notifications.show({
        color: "red",
        title: dictionary.importErrorTitle,
        message: dictionary.importErrorMessage,
      });
    }
  };

  return (
    <Group gap="xs">
      <FileButton
        accept="application/json,.json"
        resetRef={resetRef}
        onChange={(file) => void handleImport(file)}
      >
        {(props) => (
          <Tooltip label={dictionary.importGraph}>
            <ActionIcon
              {...props}
              variant="default"
              size="lg"
              disabled={isDisabled}
            >
              <UploadSimpleIcon />
            </ActionIcon>
          </Tooltip>
        )}
      </FileButton>

      <Tooltip label={dictionary.exportGraph}>
        <ActionIcon
          variant="default"
          size="lg"
          disabled={isDisabled || !graph.nodes.length}
          onClick={() => downloadGraphJson(graph)}
        >
          <DownloadSimpleIcon />
        </ActionIcon>
      </Tooltip>
    </Group>
  );
};

export { GraphIOControls };
