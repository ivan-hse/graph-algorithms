import { useContext } from "react";

import { dictionary } from "@/shared/static";

import { GraphContext } from "./GraphContext.ts";

const useGraph = () => {
  const value = useContext(GraphContext);

  if (value === null) {
    throw new Error(dictionary.useGraphError);
  }

  return value;
};

export { useGraph };
