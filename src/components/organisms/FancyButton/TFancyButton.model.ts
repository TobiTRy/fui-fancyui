import { TButtonWithNativeAttrs } from '@/components/molecules/Button';
import { ReactNode } from 'react';

export type TFancyButton = {
  isLoading?: boolean;
  label?: string;
  align?: 'left' | 'right' | 'center';
  iconAlign?: 'left' | 'right';
  oneToOne?: boolean;
  icon?: ReactNode;
  gap?: string;
};

export type TFancyButtonWithHTMLAttrs = TFancyButton & TButtonWithNativeAttrs;
