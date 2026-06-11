import { ActionIcon, Tooltip } from "@mantine/core";
import { TrashIcon } from "@phosphor-icons/react";

import { useGraph } from "@/shared/state/GraphProvider";
import { dictionary } from "@/shared/static";

import type { IClearGraphButtonProps } from "../types/IClearGraphButtonProps.ts";

const ClearGraphButton = (props: IClearGraphButtonProps) => {
  const { isDisabled } = props;

  const { graph, dispatch } = useGraph();

  return (
    <Tooltip label={dictionary.clearGraph}>
      <ActionIcon
        variant="default"
        size="lg"
        disabled={isDisabled || !graph.nodes.length}
        onClick={() => dispatch({ type: "CLEAR_GRAPH" })}
      >
        <TrashIcon />
      </ActionIcon>
    </Tooltip>
  );
};

export { ClearGraphButton };
