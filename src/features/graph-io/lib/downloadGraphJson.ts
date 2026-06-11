import type { IGraph } from "@/shared/types";

import { getExportFileName } from "./getExportFileName.ts";

const downloadGraphJson = (graph: IGraph) => {
  const json = JSON.stringify(graph, null, 2);
  const blob = new Blob([json], { type: "application/json" });

  const url = URL.createObjectURL(blob);

  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = getExportFileName();
  anchor.click();

  URL.revokeObjectURL(url);
};

export { downloadGraphJson };
