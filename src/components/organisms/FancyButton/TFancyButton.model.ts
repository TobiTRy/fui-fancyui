import { ReactNode } from 'react';

export type TFancyButtonProps = {
  isLoading?: boolean;
  label?: string;
  align?: 'left' | 'right' | 'center';
  iconAlign?: 'left' | 'right';
  oneToOne?: boolean;
  icon?: ReactNode;
  gap?: string;
};
