import { CSSProp } from 'styled-components';

import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TThemeValueOrCSS } from '@/design/designFunctions/getThemeOrValueAsCss';

export type TFancyContent = {
  /** Layout mode for the grid: 'normal' = 2x2 grid, 'stack' = single column, 'auto' = determines based on content */
  layoutMode?: 'normal' | 'stack' | 'auto';
  /** Gap between text elements (title and description) */
  gapBetweenText?: TThemeValueOrCSS;
  /** Gap between icon and content */
  gapBetweenIcon?: TThemeValueOrCSS;
  /** Overall gap for the grid */
  gap?: TThemeValueOrCSS;
  children?: React.ReactNode;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  externalStyle?: CSSProp;
  alignIcon?: 'left' | 'right';
};

export type TFancyContentHTMLAttrs = TFancyContent & React.HTMLAttributes<HTMLSpanElement>;
