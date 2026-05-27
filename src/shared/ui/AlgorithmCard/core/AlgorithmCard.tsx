import styles from "./AlgorithmCard.module.css";

import {
  Card,
  Title,
  Text,
  Badge,
  Stack,
  type BadgeProps,
} from "@mantine/core";

import { dictionary } from "@/shared/static";

import type { IAlgorithmCardProps } from "../types/IAlgorithmCardProps.ts";

const AlgorithmCard = (props: IAlgorithmCardProps) => {
  const { algorithmType, title, text, onClick } = props;

  const badgeProps: BadgeProps = {
    traversal: {
      children: dictionary.traversal,
      color: "blue",
    },
    "shortest-path": {
      children: dictionary.shortestPath,
      color: "orange",
    },
    mst: {
      children: dictionary.mst,
      color: "teal",
    },
  }[algorithmType];

  return (
    <Card className={styles.root} w={400} h={220} onClick={onClick}>
      <Stack gap="xs">
        <Title order={3}>{title}</Title>

        <Badge {...badgeProps} className={styles.badge} />

        <Text size="sm">{text}</Text>
      </Stack>
    </Card>
  );
};

export { AlgorithmCard };
