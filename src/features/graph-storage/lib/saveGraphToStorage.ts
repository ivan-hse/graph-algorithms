import { LOCAL_STORAGE_KEYS } from "@/shared/static";
import type { IGraph } from "@/shared/types";

const saveGraphToStorage = (graph: IGraph) => {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEYS.GRAPH, JSON.stringify(graph));
  } catch (error) {
    console.error(error);
  }
};

export { saveGraphToStorage };
