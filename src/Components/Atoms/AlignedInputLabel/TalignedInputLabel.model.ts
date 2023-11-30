import { TLayer } from '@/components/Interface/TLayer';
import { TTheme } from '@/components/Interface/TTheme';
import { TThemeTypes } from '@/components/Interface/TUiColors';

export type TAlign = 'left' | 'center';

export interface IAlignedInputLabel {
  $align?: TAlign;
  $colorState?: 'error' | 'active' | 'default';
  theme?: TTheme;
  $themeType?: TThemeTypes;
  $layer?: TLayer;
}
