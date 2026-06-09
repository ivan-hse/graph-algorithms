import { AlgorithmRunnerProvider } from "@/features/algorithm-runner";

import { BFSPageContent } from "./BFSPageContent.tsx";

const BFSPage = () => {
  return (
    <AlgorithmRunnerProvider>
      <BFSPageContent />
    </AlgorithmRunnerProvider>
  );
};

export { BFSPage };
