import { HTMLAttributes } from 'react';

import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TSpacings } from '@/types/TSpacings';
import { TArrayToCssValues } from '@/design/designFunctions/arrayToCssValues';
import { CSSProp } from 'styled-components';

export type TFancyLine = {
  direction?: 'horizontal' | 'vertical';
  thickness?: string;
  length?: string;
  margin?: TArrayToCssValues | TSpacings;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  externalStyle?: CSSProp;
};

export type TFancyLineWithHTMLAttributes = TFancyLine & HTMLAttributes<HTMLHRElement>;
