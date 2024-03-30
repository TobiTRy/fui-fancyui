export type TFancySingleInputs = {
  length?: number;
  errorMessage?: string;
  isSuccess?: boolean;
  handler?: (value: string) => void;
  automaticCase?: 'upper' | 'lower';
  debounceTime?: number;
};

export type TFancySingleInputsWithHTMLAttrs = TFancySingleInputs & React.HTMLAttributes<HTMLDivElement>;
