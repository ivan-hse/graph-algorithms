import styles from "./MainLayout.module.css";

import { AppShell, Center, Flex, Group, Title } from "@mantine/core";
import { GraphIcon } from "@phosphor-icons/react";
import { useLocation } from "wouter";

import { dictionary, ROUTES } from "@/shared/static";

import type { IMainLayoutProps } from "../types/IMainLayoutProps.ts";

const MainLayout = (props: IMainLayoutProps) => {
  const { children, isAlgorithmPage = false, asideContent = null } = props;

  const [location, navigate] = useLocation();

  const asideWidth = isAlgorithmPage ? "40%" : 0;

  return (
    <AppShell
      header={{ height: 60 }}
      aside={{ width: asideWidth, breakpoint: "sm" }}
    >
      <AppShell.Header pl="lg" pr="lg">
        <Flex h="100%" justify="space-between" align="center">
          <Group
            gap="xs"
            className={styles.logoGroup}
            onClick={() => location !== ROUTES.START && navigate(ROUTES.START)}
          >
            <GraphIcon className={styles.icon} />
            <Title order={2}>{dictionary.graphAlgorithms}</Title>
          </Group>
        </Flex>
      </AppShell.Header>

      <AppShell.Main>
        <Center h="calc(100vh - 60px)">{children}</Center>
      </AppShell.Main>

      {isAlgorithmPage && <AppShell.Aside>{asideContent}</AppShell.Aside>}
    </AppShell>
  );
};

export { MainLayout };
