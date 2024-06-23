import { TBreakpoint } from '@/types/TBreakPoint';
import { TSpacings } from '@/types/TSpacings';

export type TGridAreasBreakpoints = {
  [key: string]: string[];
};

// Define types for the props
export type TFancyGridTemplate = {
  gridAreas: string[];
  gridAreasBreakPoints?: TGridAreasBreakpoints;
  children?: React.ReactNode;
  gapColumn?: TSpacings;
  gapRow?: TSpacings;
  width?: string;
  height?: string;
  breakPoints?: TBreakpoint[];
};
