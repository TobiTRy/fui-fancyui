import { TLayer } from '@/types/TLayer';

import { TComponentSizes } from '@/types/TComponentSizes';
import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';
import { TUiColorsMain } from '@/types/TUiColorsMain';

export type TYearSelector = {
  sizeC?: TComponentSizes;
  selectedYear: number;
  themeType?: TUiColorsMain | 'transparent';
  themeTypeSecondary?: TUiColorsMain;
  minYear?: number;
  maxYear?: number;
  layer?: TLayer;
  textLayer?: TLayer;
  borderRadius?: TBorderRadiusSizes;
  yearChangeHandler?: (change: number) => void;
  ariaTextLeftArrow: string;
  ariaTextRightArrow: string;
};
