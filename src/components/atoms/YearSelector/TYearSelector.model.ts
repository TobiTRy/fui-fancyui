import { TLayer } from '@/types/TLayer';

import { TComponentSizes } from '@/types/TComponentSizes';
import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';
import { TUiColorsMain } from '@/types/TUiColorsMain';

export type TYearSelector = {
  sizeC?: TComponentSizes;
  selectedYear: number;
  themeType?: TUiColorsMain | 'transparent';
  themeTypeSecondary?: TUiColorsMain;
  layer?: TLayer;
  textLayer?: TLayer;
  borderRadius?: TBorderRadiusSizes;
  handler?: (change: number) => void;
  ariaTextLeftArrow: string;
  ariaTextRightArrow: string;
};
