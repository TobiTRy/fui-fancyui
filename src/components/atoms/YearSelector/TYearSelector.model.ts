import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TComponentSizes } from '@/types/TComponentSizes';

export type TYearSelector = {
  sizeC?: TComponentSizes;
  selectedYear: number;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  handler?: (change: number) => void;
  ariaTextLeftArrow?: string;
  ariaTextRightArrow?: string;
};
