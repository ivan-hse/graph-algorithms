import {
  type ConnectionLineComponentProps,
  getStraightPath,
} from "@xyflow/react";

import { getFloatingEdgeParams } from "../lib/getFloatingEdgeParams.ts";
import type { INodeGeometry } from "../types/INodeGeometry.ts";

const FloatingConnectionLine = (props: ConnectionLineComponentProps) => {
  const { fromNode, toX, toY } = props;

  const cursorNode: INodeGeometry = {
    internals: { positionAbsolute: { x: toX, y: toY } },
    measured: { width: 1, height: 1 },
  };

  const { sourceX, sourceY } = getFloatingEdgeParams(fromNode, cursorNode);

  const [edgePath] = getStraightPath({
    sourceX,
    sourceY,
    targetX: toX,
    targetY: toY,
  });

  return (
    <g>
      <path
        d={edgePath}
        fill="none"
        stroke="var(--mantine-color-violet-4)"
        strokeWidth={2}
      />

      <circle cx={toX} cy={toY} r={4} fill="var(--mantine-color-violet-4)" />
    </g>
  );
};

export { FloatingConnectionLine };
