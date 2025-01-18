import { ReactNode } from 'react';
import { TLayer, TUiColorsNotTransparent } from '@/types';

export type TInputSystemMessage = {
  showMessage?: boolean;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  children: ReactNode;
};
