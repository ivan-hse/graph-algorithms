import { type MouseEvent, useCallback, useEffect } from "react";

import styles from "./GraphEditor.module.css";

import {
  Background,
  type Connection,
  ConnectionMode,
  Controls,
  type Edge,
  Panel,
  ReactFlow,
  useEdgesState,
  useNodesState,
  useReactFlow,
} from "@xyflow/react";

import { getNextNodeLabel } from "@/shared/lib";
import { useGraph } from "@/shared/state/GraphProvider";

import { NODE_RADIUS } from "../../../static/NODE_RADIUS.ts";
import { DirectionToggle } from "../../DirectionToggle";
import { FloatingConnectionLine } from "../../FloatingEdge";
import type { TRoundNode } from "../../RoundNode";
import { toFloatingEdge } from "../lib/toFloatingEdge.ts";
import { toRoundNode } from "../lib/toRoundNode.ts";
import { CONNECTION_RADIUS } from "../static/CONNECTION_RADIUS.ts";
import { edgeTypes } from "../static/edgeTypes.ts";
import { nodeTypes } from "../static/nodeTypes.ts";
import { REACT_FLOW_PANE_CLASS } from "../static/REACT_FLOW_PANE_CLASS.ts";
import type { IGraphEditorProps } from "../types/IGraphEditorProps.ts";

const GraphEditorInner = (props: IGraphEditorProps) => {
  const { highlight, isReadonly = false, toolbar } = props;

  const { graph, dispatch } = useGraph();

  const { screenToFlowPosition } = useReactFlow();

  const [nodes, setNodes, onNodesChange] = useNodesState<TRoundNode>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

  useEffect(() => {
    setNodes(graph.nodes.map((node) => toRoundNode(node, highlight)));
  }, [highlight, graph.nodes, setNodes]);

  useEffect(() => {
    setEdges(
      graph.edges.map((edge) => {
        return toFloatingEdge(edge, graph.isDirected, highlight);
      }),
    );
  }, [highlight, graph.edges, graph.isDirected, setEdges]);

  const handleConnect = useCallback(
    (connection: Connection) => {
      const { source, target } = connection;

      if (source === target) return;

      const isDuplicateEdge = graph.edges.some((edge) => {
        if (edge.source === source && edge.target === target) {
          return true;
        }

        return (
          !graph.isDirected && edge.source === target && edge.target === source
        );
      });

      if (isDuplicateEdge) return;

      dispatch({
        type: "ADD_EDGE",
        edge: { id: crypto.randomUUID(), source, target },
      });
    },
    [graph.edges, graph.isDirected, dispatch],
  );

  const handleNodeDragStop = useCallback(
    (_event: MouseEvent, node: TRoundNode) => {
      dispatch({
        type: "UPDATE_NODE",
        id: node.id,
        patch: { x: node.position.x, y: node.position.y },
      });
    },
    [dispatch],
  );

  const handleNodesDelete = useCallback(
    (deletedNodes: TRoundNode[]) => {
      for (const node of deletedNodes) {
        dispatch({ type: "REMOVE_NODE", id: node.id });
      }
    },
    [dispatch],
  );

  const handleEdgesDelete = useCallback(
    (deletedEdges: Edge[]) => {
      for (const edge of deletedEdges) {
        dispatch({ type: "REMOVE_EDGE", id: edge.id });
      }
    },
    [dispatch],
  );

  const handleDoubleClick = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      if (isReadonly) return;

      const target = event.target as HTMLElement;
      if (!target.classList.contains(REACT_FLOW_PANE_CLASS)) {
        return;
      }

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      dispatch({
        type: "ADD_NODE",
        node: {
          id: crypto.randomUUID(),
          label: getNextNodeLabel(graph),
          x: position.x - NODE_RADIUS,
          y: position.y - NODE_RADIUS,
        },
      });
    },
    [isReadonly, graph, dispatch, screenToFlowPosition],
  );

  return (
    <div className={styles.wrapper} onDoubleClick={handleDoubleClick}>
      <ReactFlow<TRoundNode>
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        connectionLineComponent={FloatingConnectionLine}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={handleConnect}
        onNodeDragStop={handleNodeDragStop}
        onNodesDelete={handleNodesDelete}
        onEdgesDelete={handleEdgesDelete}
        connectionMode={ConnectionMode.Loose}
        connectionRadius={CONNECTION_RADIUS}
        nodesConnectable={!isReadonly}
        nodesDraggable={!isReadonly}
        nodesFocusable={!isReadonly}
        edgesFocusable={!isReadonly}
        elementsSelectable={!isReadonly}
        deleteKeyCode={isReadonly ? null : "Backspace"}
        fitView
        zoomOnDoubleClick={false}
        proOptions={{ hideAttribution: true }}
      >
        <Panel position="top-left">
          <DirectionToggle isReadonly={isReadonly} />
        </Panel>

        {toolbar && <Panel position="top-right">{toolbar}</Panel>}

        <Controls showInteractive={false} />

        <Background />
      </ReactFlow>
    </div>
  );
};

export { GraphEditorInner };
