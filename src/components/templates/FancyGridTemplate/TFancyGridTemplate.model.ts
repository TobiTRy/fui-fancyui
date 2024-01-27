import { TSpacings } from '@/types/TSpacings';
import { TBreakPoints } from '@/types/TBreakPoints';

export type TGridAreasBreakpoints = {
  [key in TBreakPoints]?: string[];
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
};
