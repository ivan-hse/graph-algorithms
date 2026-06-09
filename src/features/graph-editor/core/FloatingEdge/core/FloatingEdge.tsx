import {
  BaseEdge,
  type EdgeProps,
  getStraightPath,
  useInternalNode,
} from "@xyflow/react";

import { getFloatingEdgeParams } from "../lib/getFloatingEdgeParams.ts";

const FloatingEdge = (props: EdgeProps) => {
  const { id, source, target, markerEnd, style } = props;

  const sourceNode = useInternalNode(source);
  const targetNode = useInternalNode(target);

  if (!sourceNode || !targetNode) return null;

  const { sourceX, sourceY, targetX, targetY } = getFloatingEdgeParams(
    sourceNode,
    targetNode,
  );

  const [edgePath] = getStraightPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  return (
    <BaseEdge
      id={id}
      path={edgePath}
      style={style}
      {...(markerEnd && { markerEnd })}
    />
  );
};

export { FloatingEdge };
