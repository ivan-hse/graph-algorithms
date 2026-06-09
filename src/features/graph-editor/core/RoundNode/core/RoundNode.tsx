import styles from "./RoundNode.module.css";

import { Handle, type NodeProps, Position } from "@xyflow/react";

import type { TRoundNode } from "../types/TRoundNode.ts";

const RoundNode = (props: NodeProps<TRoundNode>) => {
  const { data } = props;

  const nodeClassName = [
    styles.node,
    data.isStart ? styles.start : null,
    data.isCurrent ? styles.current : null,
    data.isInQueue ? styles.inQueue : null,
    data.isVisited ? styles.visited : null,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={nodeClassName}>
      <Handle
        type="source"
        position={Position.Top}
        className={styles.connect}
      />

      <div className={styles.body}>
        <span className={styles.label}>{data.label}</span>
      </div>
    </div>
  );
};

export { RoundNode };
