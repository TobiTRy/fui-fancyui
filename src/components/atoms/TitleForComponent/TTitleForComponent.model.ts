import { ReactNode } from 'react';
import { TTextAlignLC } from '@/types/TTextAlignLC';
import { TTypography } from '@/components/atoms/Typography';

export type TTitleForComponent = {
  children?: ReactNode;
  title?: TTypography | ReactNode;
  titleAlign?: TTextAlignLC;
};
