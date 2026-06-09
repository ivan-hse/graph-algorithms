import { MainLayout } from "../../MainLayout";
import type { IAlgorithmPageLayoutProps } from "../types/IAlgorithmPageLayoutProps.ts";

const AlgorithmPageLayout = (props: IAlgorithmPageLayoutProps) => {
  const { children, asideContent } = props;

  return (
    <MainLayout isAlgorithmPage asideContent={asideContent}>
      {children}
    </MainLayout>
  );
};

export { AlgorithmPageLayout };
