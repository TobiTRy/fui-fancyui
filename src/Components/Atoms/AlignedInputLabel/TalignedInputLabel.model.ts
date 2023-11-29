import { TLayer } from '@/Components/Interface/TLayer';
import { TTheme } from '@/Components/Interface/TTheme';
import { TThemeTypes } from '@/Components/Interface/TUiColors';

export type TAlign = 'left' | 'center';

export interface IAlignedInputLabel {
  $align?: TAlign;
  $colorState?: 'error' | 'active' | 'default';
  theme?: TTheme;
  $themeType?: TThemeTypes;
  $layer?: TLayer;
}
