import { parseGraph } from "@/shared/lib";
import { INITIAL_GRAPH } from "@/shared/state/GraphProvider";
import { LOCAL_STORAGE_KEYS } from "@/shared/static";
import type { IGraph } from "@/shared/types";

const loadGraphFromStorage = (): IGraph => {
  try {
    const rawGraph = localStorage.getItem(LOCAL_STORAGE_KEYS.GRAPH);

    if (!rawGraph) return INITIAL_GRAPH;

    return parseGraph(JSON.parse(rawGraph));
  } catch (error) {
    console.error(error);

    return INITIAL_GRAPH;
  }
};

export { loadGraphFromStorage };
