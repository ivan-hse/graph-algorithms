import styles from "./FloatingEdge.module.css";

import {
  BaseEdge,
  type EdgeProps,
  getStraightPath,
  useInternalNode,
} from "@xyflow/react";

import { getFloatingEdgeParams } from "../lib/getFloatingEdgeParams.ts";
import type { TFloatingEdge } from "../types/TFloatingEdge.ts";

const FloatingEdge = (props: EdgeProps<TFloatingEdge>) => {
  const { id, source, target, data, markerEnd } = props;

  const sourceNode = useInternalNode(source);
  const targetNode = useInternalNode(target);

  if (!sourceNode || !targetNode) return null;

  const { sourceX, sourceY, targetX, targetY } = getFloatingEdgeParams(
    sourceNode,
    targetNode,
  );

  const [edgePath] = getStraightPath({ sourceX, sourceY, targetX, targetY });

  return (
    <BaseEdge
      id={id}
      path={edgePath}
      className={data?.isHighlighted ? styles.highlightedEdge : styles.edge}
      {...(markerEnd && { markerEnd })}
    />
  );
};

export { FloatingEdge };
