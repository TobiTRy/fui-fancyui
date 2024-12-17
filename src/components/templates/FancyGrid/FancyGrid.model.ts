import { CSSProp } from 'styled-components';

import { TThemeArrayOrValueCSS } from '@/design/designFunctions/arrayToCssValues';
import { TThemeValueOrCSS } from '@/design/designFunctions/getThemeOrValueAsCss';

export interface ICustomBreakpoint {
  breakpoint: string; // Breakpoint-Größe, z.B. '768px'
  gridSize: number; // Anzahl der Spalten für diesen Breakpoint
  gap?: string; // Optional: Angepasster Gap für diesen Breakpoint
  columns?: number; // Optional: Anzahl der Spalten für diesen Breakpoint
  rows?: string[]; // Optional: Anzahl der Reihen für diesen Breakpoint
  rowGap?: string; // Optional: Angepasster RowGap für diesen Breakpoint
  columnGap?: string; // Optional: Angepasster ColumnGap für diesen Breakpoint
}

export interface FancyGridProps {
  simpleGrid?: number;
  gap?: string;
  padding?: TThemeArrayOrValueCSS;
  margin?: TThemeArrayOrValueCSS;
  gridTemplateRows?: (string | number)[];
  gridTemplateColumns?: (string | number)[];
  rowGap?: TThemeValueOrCSS;
  columnGap?: TThemeValueOrCSS;
  children?: React.ReactNode;
  externalStyle?: CSSProp;
  breakpoints?: ICustomBreakpoint[];
}
