import { MarkerType } from "@xyflow/react";

import type { IGraphEdge } from "@/shared/types";

import { violet4Color } from "../../../static/violet4Color.ts";
import type { TFloatingEdge } from "../../FloatingEdge";
import { ARROW_SIZE } from "../static/ARROW_SIZE.ts";
import type { IGraphHighlight } from "../types/IGraphHighlight.ts";

const toFloatingEdge = (
  edge: IGraphEdge,
  isDirected: boolean,
  highlight?: IGraphHighlight,
): TFloatingEdge => {
  const isHighlighted = !!highlight?.edgeIds.includes(edge.id);

  return {
    id: edge.id,
    type: "floating",
    source: edge.source,
    target: edge.target,
    data: { isHighlighted },
    ...(isDirected && {
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: ARROW_SIZE,
        height: ARROW_SIZE,
        markerUnits: "userSpaceOnUse",
        ...(isHighlighted && { color: violet4Color }),
      },
    }),
  };
};

export { toFloatingEdge };
