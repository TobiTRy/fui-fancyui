export type TColorState = {
  type: 'item' | 'text';
  isActive?: boolean;
  errorMessage?: string;
  value?: string | number | readonly string[] | undefined;
  placeholder?: string;
};

export type TColorStateOutput = 'default' | 'active' | 'error';
