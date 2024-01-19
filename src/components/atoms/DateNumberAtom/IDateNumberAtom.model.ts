import { TLayer } from '@/types/TLayer';
import { TThemeTypesNotTransparent } from '@/types/TThemeTypesNotTransparent';

export type IRange = { start?: boolean; end?: boolean; inRange?: boolean };

export interface IDateNumberAtom {
  dateNumber: number;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  range?: IRange;
  isCurrentDay?: boolean;
  themeType?: TThemeTypesNotTransparent;
  layer?: TLayer;
}
