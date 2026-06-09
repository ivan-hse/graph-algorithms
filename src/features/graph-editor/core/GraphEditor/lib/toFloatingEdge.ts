import styles from "../core/GraphEditor.module.css";

import { type Edge, MarkerType } from "@xyflow/react";

import type { IGraphEdge } from "@/shared/types";

import type { IGraphHighlight } from "../types/IGraphHighlight.ts";

const toFloatingEdge = (
  edge: IGraphEdge,
  isDirected: boolean,
  highlight?: IGraphHighlight,
): Edge => {
  const isHighlighted = !!highlight?.edgeIds.includes(edge.id);

  return {
    id: edge.id,
    type: "floating",
    source: edge.source,
    target: edge.target,
    ...(isDirected && { markerEnd: { type: MarkerType.ArrowClosed } }),
    ...(isHighlighted && { className: styles.highlightedEdge }),
  };
};

export { toFloatingEdge };
