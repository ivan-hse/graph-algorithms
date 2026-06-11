import type { ReactNode } from "react";

import type { IGraphHighlight } from "./IGraphHighlight.ts";

interface IGraphEditorProps {
  highlight?: IGraphHighlight;
  isReadonly?: boolean;
  toolbar?: ReactNode;
}

export type { IGraphEditorProps };
