import "@xyflow/react/dist/style.css";

import { ReactFlowProvider } from "@xyflow/react";

import type { IGraphEditorProps } from "../types/IGraphEditorProps.ts";
import { GraphEditorInner } from "./GraphEditorInner.tsx";

const GraphEditor = (props: IGraphEditorProps) => {
  return (
    <ReactFlowProvider>
      <GraphEditorInner {...props} />
    </ReactFlowProvider>
  );
};

export { GraphEditor };
