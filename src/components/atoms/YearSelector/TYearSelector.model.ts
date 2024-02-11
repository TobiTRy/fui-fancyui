import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';
import { TComponentSizes } from '@/types/TComponentSizes';
import { TBorderRadiusSizes } from 'lib';

export type TYearSelector = {
  sizeC?: TComponentSizes;
  selectedYear: number;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
  textLayer?: TLayer;
  borderRadius?: TBorderRadiusSizes;
  handler?: (change: number) => void;
  ariaTextLeftArrow: string;
  ariaTextRightArrow: string;
};
