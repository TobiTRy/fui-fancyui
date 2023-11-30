import { TLayer } from '@/interface/TLayer';
import { TTheme } from '@/interface/TTheme';
import { TThemeTypes } from '@/interface/TUiColors';

export type TAlign = 'left' | 'center';

export interface IAlignedInputLabel {
  $align?: TAlign;
  $colorState?: 'error' | 'active' | 'default';
  theme?: TTheme;
  $themeType?: TThemeTypes;
  $layer?: TLayer;
}
