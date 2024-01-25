import { HTMLAttributes } from 'react';

import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

export type TFancyLine = {
  direction?: 'horizontal' | 'vertical';
  thickness?: string;
  margin?: string;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
};

export type TFancyLineWithHTMLAttributes = TFancyLine & HTMLAttributes<HTMLHRElement>;
