import { TLayer } from '@/types/TLayer';
import { TThemeTypes } from '@/types/TThemeTypes';

export type IRange = { start?: boolean; end?: boolean; inRange?: boolean };

export interface IDateNumberAtom {
  dateNumber: number;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  range?: IRange;
  isCurrentDay?: boolean;
  themeType?: TThemeTypes;
  layer?: TLayer;
}
