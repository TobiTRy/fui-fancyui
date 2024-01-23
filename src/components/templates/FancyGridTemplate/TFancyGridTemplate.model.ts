import { TSpacings } from '@/types/TSpacings';

// Define types for the props
export type FancyGridTemplateProps = {
  gridAreas: string[];
  children?: React.ReactNode;
  gapColumn?: TSpacings;
  gapRow?: TSpacings;
  width?: string;
  height?: string;
};

export type GridAreaItemProps = {
  gridArea: string;
};
