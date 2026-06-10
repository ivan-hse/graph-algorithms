import { SegmentedControl } from "@mantine/core";

import { useGraph } from "@/shared/state/GraphProvider";
import { dictionary } from "@/shared/static";

import type { IDirectionToggleProps } from "../types/IDirectionToggleProps.ts";

const DirectionToggle = (props: IDirectionToggleProps) => {
  const { isReadonly } = props;

  const { graph, dispatch } = useGraph();

  return (
    <SegmentedControl
      data={[
        { value: "undirected", label: dictionary.undirected },
        { value: "directed", label: dictionary.directed },
      ]}
      value={graph.isDirected ? "directed" : "undirected"}
      disabled={isReadonly}
      onChange={(value) => {
        dispatch({ type: "TOGGLE_DIRECTED", isDirected: value === "directed" });
      }}
    />
  );
};

export { DirectionToggle };
