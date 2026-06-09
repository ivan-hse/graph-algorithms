import type { TPseudocode } from "@/shared/types";

const BFS_PSEUDOCODE: TPseudocode = [
  "BFS(graph, startNode):",
  "  очередь ← [startNode]; посещенные ← {startNode}",
  "  пока очередь не пуста:",
  "    вершина u ← извлечь из начала очереди",
  "    для каждого соседа v вершины u:",
  "      если v еще не посещен:",
  "        пометить v посещенным",
  "        добавить v в конец очереди",
  "  обход завершен",
];

export { BFS_PSEUDOCODE };
