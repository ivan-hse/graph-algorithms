interface IAlgorithmStep<TAlgorithmState extends object> {
  stepNumber: number;
  description: string;
  state: TAlgorithmState;

  pseudocodeLine?: number;
}

export type { IAlgorithmStep };
