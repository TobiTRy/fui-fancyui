import { TLayer } from '@/interface/TLayer';
import { TThemeTypes } from '@/interface/TThemeTypes';

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
