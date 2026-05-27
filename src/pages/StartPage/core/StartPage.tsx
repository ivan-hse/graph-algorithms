import { Flex, Stack, Title } from "@mantine/core";
import { useLocation } from "wouter";

import { MainLayout } from "@/shared/layouts/MainLayout";
import { dictionary, ROUTES } from "@/shared/static";
import { AlgorithmCard } from "@/shared/ui/AlgorithmCard";

const StartPage = () => {
  const [, navigate] = useLocation();

  return (
    <MainLayout>
      <Stack align="center" gap="xl">
        <Title>{dictionary.startPageTitle}</Title>

        <Flex columnGap="lg">
          <Stack gap="lg">
            <AlgorithmCard
              algorithmType="traversal"
              title={dictionary.bfs}
              text={dictionary.bfsDescription}
              onClick={() => navigate(ROUTES.BFS)}
            />

            <AlgorithmCard
              algorithmType="traversal"
              title={dictionary.dfs}
              text={dictionary.dfsDescription}
              onClick={() => navigate(ROUTES.DFS)}
            />
          </Stack>

          <Stack gap="lg">
            <AlgorithmCard
              algorithmType="shortest-path"
              title={dictionary.dijkstra}
              text={dictionary.dijkstraDescription}
              onClick={() => navigate(ROUTES.DIJKSTRA)}
            />

            <AlgorithmCard
              algorithmType="shortest-path"
              title={dictionary.bellmanFord}
              text={dictionary.bellmanFordDescription}
              onClick={() => navigate(ROUTES.BELLMAN_FORD)}
            />
          </Stack>

          <Stack gap="lg">
            <AlgorithmCard
              algorithmType="mst"
              title={dictionary.prim}
              text={dictionary.primDescription}
              onClick={() => navigate(ROUTES.PRIM)}
            />

            <AlgorithmCard
              algorithmType="mst"
              title={dictionary.kruskal}
              text={dictionary.kruskalDescription}
              onClick={() => navigate(ROUTES.KRUSKAL)}
            />
          </Stack>
        </Flex>
      </Stack>
    </MainLayout>
  );
};

export { StartPage };
