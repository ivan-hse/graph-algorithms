import styles from "./MainLayout.module.css";

import { AppShell, Center, Flex, Group, Title } from "@mantine/core";
import { GraphIcon } from "@phosphor-icons/react";
import { useLocation } from "wouter";

import { dictionary, ROUTES } from "@/shared/static";

import { HEADER_HEIGHT } from "../static/HEADER_HEIGHT.ts";
import type { IMainLayoutProps } from "../types/IMainLayoutProps.ts";

const MainLayout = (props: IMainLayoutProps) => {
  const { children, isAlgorithmPage = false, asideContent = null } = props;

  const [location, navigate] = useLocation();

  return (
    <AppShell
      header={{ height: HEADER_HEIGHT }}
      {...(isAlgorithmPage && { aside: { width: "40%", breakpoint: "sm" } })}
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
        <Center h={`calc(100vh - ${HEADER_HEIGHT}px)`}>{children}</Center>
      </AppShell.Main>

      {isAlgorithmPage && <AppShell.Aside>{asideContent}</AppShell.Aside>}
    </AppShell>
  );
};

export { MainLayout };
