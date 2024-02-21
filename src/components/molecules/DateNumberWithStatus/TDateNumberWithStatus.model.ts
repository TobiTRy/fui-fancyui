import { TLayer } from '@/types/TLayer';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

import { IAvailableDot } from '@/components/atoms/AvilableDot';
import { IRange } from '@/components/atoms/DateNumberAtom/IDateNumberAtom.model';

export type TDateNumberWithStatus = {
  isAvailable?: IAvailableDot;
  disabled?: boolean;
  dateNumber: number;
  isSelected?: boolean;
  isCurrentDay?: boolean;
  range?: IRange;
  onClick?: () => void;
  themeType?: TUiColorsNotTransparent;
  layer?: TLayer;
};
