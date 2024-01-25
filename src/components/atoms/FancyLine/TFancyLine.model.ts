import { HTMLAttributes } from 'react';

import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TSpacingArray, TSpacings } from '@/types/TSpacings';

export type TFancyLine = {
  direction?: 'horizontal' | 'vertical';
  thickness?: string;
  margin?: TSpacingArray | TSpacings;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
};

export type TFancyLineWithHTMLAttributes = TFancyLine & HTMLAttributes<HTMLHRElement>;
