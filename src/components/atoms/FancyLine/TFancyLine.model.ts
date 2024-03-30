import { HTMLAttributes } from 'react';

import { TThemeArrayOrValueCSS } from '@/design/designFunctions/arrayToCssValues';
import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TUiColorsSystemMessage } from '@/types/TUiColorsSystemMessage';
import { CSSProp } from 'styled-components';

export type TFancyLine = {
  direction?: 'horizontal' | 'vertical';
  thickness?: string;
  length?: string;
  margin?: TThemeArrayOrValueCSS;
  themeType?: TUiColorsNotTransparent;
  systemMessageType?: TUiColorsSystemMessage;
  isActive?: boolean;
  layer?: TLayer;
  externalStyle?: CSSProp;
};

export type TFancyLineWithHTMLAttributes = TFancyLine & HTMLAttributes<HTMLHRElement>;
