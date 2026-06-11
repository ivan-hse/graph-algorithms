import { useEffect } from "react";

import { useGraph } from "@/shared/state/GraphProvider";

import { saveGraphToStorage } from "../lib/saveGraphToStorage.ts";

const GraphStorageBridge = () => {
  const { graph } = useGraph();

  useEffect(() => {
    saveGraphToStorage(graph);
  }, [graph]);

  return null;
};

export { GraphStorageBridge };
