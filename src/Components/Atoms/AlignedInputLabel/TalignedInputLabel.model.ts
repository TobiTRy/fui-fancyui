import { TLayer } from '@/components/core/interface/TLayer';
import { TTheme } from '@/components/core/interface/TTheme';
import { TThemeTypes } from '@/components/core/interface/TUiColors';

export type TAlign = 'left' | 'center';

export interface IAlignedInputLabel {
  $align?: TAlign;
  $colorState?: 'error' | 'active' | 'default';
  theme?: TTheme;
  $themeType?: TThemeTypes;
  $layer?: TLayer;
}
