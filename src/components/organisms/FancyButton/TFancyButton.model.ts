import { ReactNode } from 'react';
import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';
import { TTypographyList } from '@/types/TTypographyList';

export type IFancyButtonProps = {
  isLoading?: boolean;
  label?: string;
  align?: 'left' | 'right' | 'center';
  iconAlign?: 'left' | 'right';
  oneToOne?: boolean;
  icon?: ReactNode;
  fontVariant?: TTypographyList;
  gap?: string;
};
