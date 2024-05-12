import { CSSProp } from 'styled-components';

import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TThemeValueOrCSS } from '@/design/designFunctions/getThemeOrValueAsCss';

export type TFancyContent = {
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  directionTextGroup?: 'row' | 'column';
  alignTextGroup?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  gapBetweenText?: TThemeValueOrCSS;
  gapBetweenIcon?: TThemeValueOrCSS;
  children?: React.ReactNode;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  externalStyle?: CSSProp;
  alignIcon?: 'left' | 'right';
};

export type TFancyContentHTMLAttrs = TFancyContent & React.HTMLAttributes<HTMLSpanElement>;
