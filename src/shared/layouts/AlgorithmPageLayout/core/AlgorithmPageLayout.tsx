import { MainLayout } from "../../MainLayout";
import type { IAlgorithmPageLayoutProps } from "../types/IAlgorithmPageLayoutProps.ts";

const AlgorithmPageLayout = (props: IAlgorithmPageLayoutProps) => {
  const { children } = props;

  return <MainLayout isAlgorithmPage>{children}</MainLayout>;
};

export { AlgorithmPageLayout };
