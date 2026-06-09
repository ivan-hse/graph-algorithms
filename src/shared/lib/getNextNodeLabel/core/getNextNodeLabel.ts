import type { IGraph } from "@/shared/types";

import { A_ASCII_CODE } from "../static/A_ASCII_CODE.ts";
import { ALPHABET_SIZE } from "../static/ALPHABET_SIZE.ts";

const getLabelForIndex = (index: number): string => {
  return index < ALPHABET_SIZE
    ? String.fromCharCode(A_ASCII_CODE + index)
    : (index + 1).toString();
};

const getNextNodeLabel = (graph: IGraph): string => {
  const usedLabels = new Set(graph.nodes.map((node) => node.label));

  let index = 0;

  while (usedLabels.has(getLabelForIndex(index))) {
    index++;
  }

  return getLabelForIndex(index);
};

export { getNextNodeLabel };
