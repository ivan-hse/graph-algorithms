import type { IGraphNode } from "@/shared/types";

import type { TRoundNode } from "../../RoundNode";
import type { IGraphHighlight } from "../types/IGraphHighlight.ts";

const toRoundNode = (
  node: IGraphNode,
  highlight?: IGraphHighlight,
): TRoundNode => {
  return {
    id: node.id,
    type: "round",
    position: { x: node.x, y: node.y },
    data: {
      label: node.label,
      isStart: node.id === highlight?.startNodeId,
      isCurrent: node.id === highlight?.currentNodeId,
      isInQueue: !!highlight?.queueIds.includes(node.id),
      isVisited: !!highlight?.visitedIds.includes(node.id),
    },
  };
};

export { toRoundNode };
