import styles from "./NotFoundPage.module.css";

import { Button, Center, Flex, Title } from "@mantine/core";
import { GraphIcon } from "@phosphor-icons/react";
import { navigate } from "wouter/use-browser-location";

import { dictionary, ROUTES } from "@/shared/static";

const NotFoundPage = () => {
  return (
    <Center h="100vh">
      <Flex direction="column" align="center" rowGap="lg">
        <GraphIcon className={styles.icon} />

        <Title>{dictionary.pageNotFound}</Title>

        <Button size="md" onClick={() => navigate(ROUTES.START)}>
          {dictionary.toStartPage}
        </Button>
      </Flex>
    </Center>
  );
};

export { NotFoundPage };
