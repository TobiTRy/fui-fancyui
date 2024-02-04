import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

export type TYearSelector = {
  selectedYear: number;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  handler?: (change: number) => void;
  ariaTextLeftArrow?: string;
  ariaTextRightArrow?: string;
};
