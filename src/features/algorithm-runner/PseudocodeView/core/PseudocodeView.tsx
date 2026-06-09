import styles from "./PseudocodeView.module.css";

import { Stack, Title } from "@mantine/core";

import { dictionary } from "@/shared/static";

import { useAlgorithmRunner } from "../../AlgorithmRunnerProvider";
import type { IPseudocodeViewProps } from "../types/IPseudocodeViewProps.ts";

const PseudocodeView = (props: IPseudocodeViewProps) => {
  const { lines } = props;

  const { steps, currentStepIndex } = useAlgorithmRunner();

  const step = currentStepIndex !== -1 ? steps[currentStepIndex] : null;

  const currentLine = step?.pseudocodeLine;

  return (
    <Stack gap="xs">
      <Title order={4}>{dictionary.pseudocode}</Title>

      <div className={styles.code}>
        {lines.map((line, index) => {
          const isCurrent = index + 1 === currentLine;

          return (
            <div
              key={index}
              className={isCurrent ? styles.currentLine : styles.line}
            >
              {line}
            </div>
          );
        })}
      </div>
    </Stack>
  );
};

export { PseudocodeView };
