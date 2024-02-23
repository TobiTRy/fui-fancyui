import { CSSProp } from 'styled-components';

export interface ICustomBreakpoint {
  breakpoint: string; // Breakpoint-Größe, z.B. '768px'
  gridSize: number; // Anzahl der Spalten für diesen Breakpoint
  gap?: string; // Optional: Angepasster Gap für diesen Breakpoint
}

export interface FancyGridProps {
  grid?: number;
  gap?: string;
  children?: React.ReactNode;
  externalStyle?: CSSProp;
  breakpoints?: ICustomBreakpoint[];
}
