const dictionary = {
  pageNotFound: "Страница не найдена!",
  toStartPage: "На главную",
  graphAlgorithms: "Алгоритмы на графах",
  bfs: "Обход в ширину (BFS)",
  dfs: "Обход в глубину (DFS)",
  dijkstra: "Алгоритм Дейкстры",
  bellmanFord: "Алгоритм Беллмана-Форда",
  prim: "Алгоритм Прима",
  kruskal: "Алгоритм Краскала",
  bfsDescription:
    "Алгоритм обхода графа, при\u00A0котором вершины посещаются в\u00A0порядке возрастания расстояния от\u00A0исходной, что позволяет находить кратчайшие пути в\u00A0невзвешенном графе.",
  dfsDescription:
    "Алгоритм обхода графа, при\u00A0котором каждая ветвь исследуется до\u00A0максимально возможной глубины с\u00A0последующим возвратом, применяемый для\u00A0выделения компонент связности и топологической сортировки.",
  dijkstraDescription:
    "Алгоритм поиска кратчайших путей от\u00A0заданной вершины до\u00A0всех остальных во\u00A0взвешенном графе с\u00A0неотрицательными весами ребер, основанный на\u00A0последовательном выборе вершины с\u00A0наименьшей текущей оценкой расстояния.",
  bellmanFordDescription:
    "Алгоритм поиска кратчайших путей от\u00A0заданной вершины в графе с\u00A0произвольными весами ребер, выполняющий |V|−1 проходов по\u00A0всем ребрам и позволяющий обнаружить отрицательные циклы.",
  primDescription:
    "Алгоритм построения минимального остовного дерева связного взвешенного неориентированного графа путем последовательного добавления ребра минимального веса, соединяющего построенное поддерево с\u00A0новой вершиной.",
  kruskalDescription:
    "Алгоритм построения минимального остовного дерева взвешенного неориентированного графа, при\u00A0котором ребра рассматриваются в\u00A0порядке неубывания весов и включаются в\u00A0остов, если не\u00A0образуют цикла с\u00A0ранее добавленными.",
  traversal: "Обход графа",
  shortestPath: "Поиск кратчайшего пути",
  mst: "Минимальное остовное дерево",
  startPageTitle: "Изучение алгоритмов на графах через визуализацию",
  useGraphError: "useGraph должен использоваться внутри <GraphProvider>",
  useAlgorithmRunnerError:
    "useAlgorithmRunner должен использоваться внутри <AlgorithmRunnerProvider>",
  stepCounter: (currentStep: number, totalSteps: number) =>
    `Шаг ${currentStep} из ${totalSteps}`,
  pressRunHint: (algorithmName: string) =>
    `Постройте граф, выберите стартовую вершину и нажмите «Запустить ${algorithmName}».`,
  pause: "Пауза",
  play: "Запустить воспроизведение",
  startNode: "Стартовая вершина",
  startNodePlaceholder: "Выберите вершину",
  runAlgorithm: (algorithmName: string) => `Запустить ${algorithmName}`,
  stepBackward: "Шаг назад",
  stepForward: "Шаг вперед",
  reset: "Сбросить",
  queue: "Очередь",
  queueIsEmpty: "Очередь пуста",
  pseudocode: "Псевдокод",
  bfsInit: (label: string) =>
    `Помещаем стартовую вершину ${label} в очередь и помечаем ее посещенной.`,
  bfsDequeue: (label: string) =>
    `Извлекаем вершину ${label} из очереди и начинаем просматривать ее соседей.`,
  bfsCheckVisited: (neighborLabel: string, currentNodeLabel: string) =>
    `Сосед ${neighborLabel} вершины ${currentNodeLabel} уже посещен — пропускаем его.`,
  bfsEnqueue: (neighborLabel: string, currentNodeLabel: string) =>
    `Сосед ${neighborLabel} вершины ${currentNodeLabel} еще не посещен — помечаем его посещенным и добавляем в очередь.`,
  bfsNoNeighbors: (currentNodeLabel: string) =>
    `У вершины ${currentNodeLabel} нет соседей для обработки.`,
  bfsDone: (visited: number, total: number) =>
    `Очередь пуста — обход завершен. Посещено вершин: ${visited} из ${total}.`,
  emptyGraphHint:
    "Граф пуст. Добавьте вершины двойным кликом по полю, затем соедините их ребрами.",
  undirected: "Неориентированный",
  directed: "Ориентированный",
  importGraph: "Импортировать граф",
  exportGraph: "Экспортировать граф",
  clearGraph: "Очистить граф",
  importSuccessTitle: "Импорт графа",
  importSuccessMessage: "Граф успешно импортирован",
  importErrorTitle: "Ошибка импорта",
  importErrorMessage:
    "Не удалось импортировать граф: файл поврежден или имеет неверный формат",
  parseGraphError: "Ребро ссылается на несуществующую вершину",
} as const;

export { dictionary };
