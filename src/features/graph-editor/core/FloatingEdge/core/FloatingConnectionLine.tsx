import {
  type ConnectionLineComponentProps,
  getStraightPath,
} from "@xyflow/react";

import { violet4Color } from "../../../static/violet4Color.ts";
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
      <path d={edgePath} fill="none" stroke={violet4Color} strokeWidth={2} />
      <circle cx={toX} cy={toY} r={4} fill={violet4Color} />
    </g>
  );
};

export { FloatingConnectionLine };
