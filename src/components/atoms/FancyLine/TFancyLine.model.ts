import { HTMLAttributes } from 'react';

import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TSpacings } from '@/types/TSpacings';
import { TArrayToCssValues } from '@/design/designFunctions/arrayToCssValues';

export type TFancyLine = {
  direction?: 'horizontal' | 'vertical';
  thickness?: string;
  margin?: TArrayToCssValues | TSpacings;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
};

export type TFancyLineWithHTMLAttributes = TFancyLine & HTMLAttributes<HTMLHRElement>;
