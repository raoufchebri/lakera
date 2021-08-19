export type Sequence = {
  prefix: string;
  metric_original: number;
  metric_modified: number;
};

export type Result = {
  test_results: {
    num_sequences: number;
    metric_original: number;
    metric_modified: number;
    description: string;
    test_passes: boolean;
  };
  sequences: Sequence[];
};
