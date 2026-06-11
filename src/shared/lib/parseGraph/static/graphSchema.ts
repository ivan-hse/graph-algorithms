import { z } from "zod";

const graphSchema = z.object({
  nodes: z.array(
    z.object({
      id: z.string(),
      label: z.string(),
      x: z.number(),
      y: z.number(),
    }),
  ),
  edges: z.array(
    z.object({
      id: z.string(),
      source: z.string(),
      target: z.string(),
      weight: z.number().optional(),
    }),
  ),
  isDirected: z.boolean(),
});

export { graphSchema };
