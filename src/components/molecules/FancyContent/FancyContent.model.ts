import { CSSProp } from 'styled-components';

import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TThemeValueOrCSS } from '@/design/designFunctions/getThemeOrValueAsCss';
import { TTextAlignLRC, TAlignItemsValues, TComponentSizesMid } from '@/types';

export type TFancyContent = {
  /** Layout mode for the grid: 'normal' = 2x2 grid, 'stack' = single column, 'row' = horizontal row, 'span' = icon spans both rows, 'inline' = icon and title in one line with description below, 'auto' = determines based on content */
  layoutMode?: 'normal' | 'stack' | 'row' | 'span' | 'inline' | 'auto';
  /** Gap between text elements (title and description) */
  gapBetweenText?: TThemeValueOrCSS;
  /** Gap between icon and content */
  gapBetweenIcon?: TThemeValueOrCSS;
  /** Overall gap for the grid */
  children?: React.ReactNode;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  externalStyle?: CSSProp;
  alignIcon?: 'left' | 'right';
  /** Horizontal alignment of all content */
  justify?: TTextAlignLRC;
  /** Vertical alignment of all content */
  align?: TAlignItemsValues;
  /** If true, the content will be wide */
  wide?: boolean;
  /** Size of the content component */
  sizeC?: TComponentSizesMid;
};

export type TFancyContentHTMLAttrs = TFancyContent & React.HTMLAttributes<HTMLSpanElement>;
