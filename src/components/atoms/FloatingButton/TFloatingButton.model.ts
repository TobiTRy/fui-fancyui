import { ReactNode } from 'react';
import { TComponentSizes } from '@/types/TComponentSizes';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TLayer } from '@/types/TLayer';

export type TFloatingButton = {
  isOpen: boolean;
  onClick: () => void;
  icon: ReactNode;
  type?: 'button' | 'switch';
  size?: TComponentSizes;
  label: string;
  themeType?: TUiColorsNotTransparent;
  outline?: boolean;
  layer?: TLayer;
};
