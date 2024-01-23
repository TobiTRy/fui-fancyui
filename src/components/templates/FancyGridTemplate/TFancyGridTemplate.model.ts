import { TSpacings } from '@/types/TSpacings';

// Define types for the props
export type TFancyGridTemplate = {
  gridAreas: string[];
  children?: React.ReactNode;
  gapColumn?: TSpacings;
  gapRow?: TSpacings;
  width?: string;
  height?: string;
};
