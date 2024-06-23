import { ReactNode } from 'react';
import { TTextAlignLC } from '@/types/TTextAlignLC';
import { TTypography } from '@/components/atoms/Typography';
import { TSpacings } from '@/types/TSpacings';

export type TTitleForComponent = {
  children?: ReactNode;
  gap?: TSpacings;
  title?: TTypography | ReactNode;
  align?: TTextAlignLC;
};
